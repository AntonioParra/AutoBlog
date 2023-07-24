const selectPosts = require('../db/selectPosts');

const getList = () => {
    Promise.all([
        selectPosts()
    ]).then(datas => {
        console.log(datas)
    });
};

module.exports = getList;