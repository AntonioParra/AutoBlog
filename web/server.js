const express = require('express');
const path = require('path');
const fs = require('fs');

const getList = require('../autoblog/getList');

const app = express();
const port = 3000;


app.get('/', async (req, res) => {
    const id = +req.query.post;
    const posts = await getList();

    if(!posts || posts.length === 0){
        res.status(404);
        res.send();
        return;
    }

    let selectedPost;
    if(!id) {
       selectedPost = posts[0];
    }  else {
        selectedPost = posts.find(post => post.id === id);
    }

    if(!selectedPost) {
        res.status(404);
        res.send();
        return;
    }

    let indexHtml = fs.readFileSync('./web/index_template.html', {encoding: 'utf-8', flag: 'r'});
    indexHtml = indexHtml.replace('{{title}}', selectedPost.title);
    indexHtml = indexHtml.replace('{{introduction}}', selectedPost.introduction);
    indexHtml = indexHtml.replace('{{body}}', selectedPost.body.split('\n').map(p => `<p>${p}</p>`).join(''));
    indexHtml = indexHtml.replace('{{conclusion}}', selectedPost.conclusion);
    indexHtml = indexHtml.replace('{{info}}', `${selectedPost.author} @ ${selectedPost.datetime}`);
    indexHtml = indexHtml.replace('{{img1}}', `/img?img=img${selectedPost.id}_1.png`);
    indexHtml = indexHtml.replace('{{img2}}', `/img?img=img${selectedPost.id}_2.png`);

    const listPostHtml = posts.map(post => {
        return `<div class="postLinkContainer">
            <a href="/?post=${post.id}">${post.title}</a>
        </div>`;
    }).join('');
    
    indexHtml = indexHtml.replace('{{postList}}', listPostHtml);

    res.set('Content-Type', 'text/html');
    res.send(indexHtml);
});
app.get('/style.css', (req, res) => res.sendFile(path.join(__dirname, './style.css')));
app.get('/script.js', (req, res) => res.sendFile(path.join(__dirname,'./script.js')));
app.get('/img', (req, res) => {
    const id = req.query.img;
    res.sendFile(path.join(__dirname, '../img/' + id), undefined, (err) => {
        if(err) {
            res.status(404);
            res.send();
        }
    });
});

app.listen(port, function () {
  console.log(`Web listening on port ${port}!`);
});