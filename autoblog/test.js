const generate = require('./generate');

const theme = 'King of the jungle';

generate(theme).then(post => {
    console.log(post)
});

