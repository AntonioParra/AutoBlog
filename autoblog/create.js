const insertPost = require('../db/insertPost');

const create = (theme, author, post) => {
    return Promise.all([
        insertPost(theme, author, post.parsedContent)
    ]).then(datas => {
        console.log(datas)
    });
};

module.exports = create;