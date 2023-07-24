const insertPost = require('../db/insertPost');
const fetchImage = require('../img-utils/fetchImage')

const create = (theme, author, post) => {
    return Promise.all([
        insertPost(theme, author, post.parsedContent)
    ]).then(datas => {
        const id = datas[0];

        fetchImage(post.image1, `./img/img${id}_1.png`);
        fetchImage(post.image2, `./img/img${id}_2.png`);
    });
};

module.exports = create;