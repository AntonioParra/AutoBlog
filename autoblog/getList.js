const selectPosts = require('../db/selectPosts');

const getList = () => {
    return new Promise((res, rej) => {
        selectPosts().then(res).catch(rej);
    });
};

module.exports = getList;