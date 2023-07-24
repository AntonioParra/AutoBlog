const db = require('./db');

const selectPosts = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            const sql = 'SELECT * FROM posts';
            db.all(sql, [], (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    });
};

module.exports = selectPosts;