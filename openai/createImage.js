const openai = require('./openai');

const prepareOptions = options => {
    options = structuredClone(options);
    if(!options) {
        options = {};
    }
    if(!options.n) {
        options.n = 1;
    }
    if(!options.size) {
        options.size = '256x256';
    }
    if(!options.response_format) {
        options.response_format = 'url';
    }
    return options;
}

const createImage = (prompt, options) => {
    options = prepareOptions(options);

    return new Promise((resolve, reject) => {
        openai.createImage({
            prompt: prompt,
            n: options.n,
            size: options.size,
            response_format: options.response_format
        }).then(resolve).catch(reject);
    });
}

module.exports = createImage;