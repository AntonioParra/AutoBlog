const createChatCompletion = require('./createChatCompletion');
const createImage = require('./createImage');

const prompt = 'Hello world!';

// createChatCompletion(prompt, {max_tokens: 2048}).then((res) => {
//     console.log(res.data);
//     res.data.choices.forEach(choice => {
//         console.log(choice.message);
//     });
// }).catch((e) => {
//     console.log(e);
// });

// createImage(prompt, {size: '1024x1024'}).then((res) => {
//     console.log(res.data);
// }).catch((e) => {
//     console.log(e);
// });