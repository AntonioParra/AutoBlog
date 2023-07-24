const createChatCompletion = require('../openai/createChatCompletion');
const createImage = require('../openai/createImage');

const generate = text => {
    // const prompt = `Write a blog post about: ${text}. Follow this estructure: Title, introduction, body and conclusion. Suggest also a list of useful twitter tags sepparated by commas.`
    const prompt = `Write a blog post about: ${text}. Follow this estructure: Title, introduction, body and conclusion. Do not add titles to body paragraphs.`

    return Promise.all([
        createChatCompletion(prompt, {max_tokens: 3072}),
        createImage(text, {size: '256x256', n: 2 })
    ]).then(datas => {
        const chatCompletion = datas[0];
        const images = datas[1];

        const post = parse(chatCompletion.data, images.data);
        
        return post;
    });
};

const parse = (chatCompletion, images) => {
    const content = chatCompletion.choices[0].message.content;

    const parsed= {
        title: [],
        introducion: [],
        body: [],
        conclusion: []
    };
    let lines = content.split('\n');
    let property = '';
    lines.forEach(line => {
        if(line.toUpperCase().startsWith('TITLE')){
            property = 'title';
        } else if(line.toUpperCase().startsWith('INTRODUCTION')){
            property = 'introducion';
        } else if(line.toUpperCase().startsWith('BODY')){
            property = 'body';
        } else if(line.toUpperCase().startsWith('CONCLUSION')){
            property = 'conclusion';
        }

        line = line.replace(/^(TITLE|Title|title|INTRODUCTION|Introduction|introduction|BODY|Body|body|CONCLUSION|Conclusion|conclusion)/, '').replace(/^[:]/, '').trim();

        if(line) {
            parsed[property].push(line);
        }
    });
    
    const res = {
        originalContent: content,
        parsedContent: {
            title: parsed.title.join('\n'),
            introduction: parsed.introducion.join('\n'),
            body: parsed.body.join('\n'),
            conclusion: parsed.conclusion.join('\n')
        },
        image1: images.data[0].url,
        image2: images.data[1].url
    };

    return res;
};

module.exports = generate;
