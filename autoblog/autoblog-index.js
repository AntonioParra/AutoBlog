const generate = require('./generate');
const create = require('./create');

const theme = process.argv[2];

generate(theme).then(post => {
    create(theme, 'OpenAI ChatGPT', post).then(() => {
        console.log('Post created')
    });
});