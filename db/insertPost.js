const db = require('./db');

const insertPost = (theme, author, post) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            const insertSql = 'INSERT INTO posts(theme, title, introduction, body, conclusion, author, datetime) VALUES(?, ?, ?, ?, ?, ?, datetime(\'now\'))';
            db.run(insertSql, [theme, post.title, post.introduction, post.body, post.conclusion, author], function(err) {
                if(err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
            
        });
    });
    
};

module.exports = insertPost;