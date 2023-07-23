const openai = require('./openai');

const prepareOptions = options => {
    options = structuredClone(options);
    if(!options) {
        options = {};
    }
    if(!options.model) {
        options.model = 'gpt-3.5-turbo';
    }
    if(!options.max_tokens) {
        options.max_tokens = 64;
    }
    if(!options.temperature) {
        options.temperature = 1;
    }
    if(!options.top_p) {
        options.top_p = 1;
    }
    if(!options.frequency_penalty) {
        options.frequency_penalty = 0;
    }
    if(!options.presence_penalty) {
        options.presence_penalty = 0;
    }
    return options;
}

const createChatCompletion = (prompt, options) => {
    options = prepareOptions(options);

    return new Promise((resolve, reject) => {
        openai.createChatCompletion({
          messages: [{ role: "user", content: prompt}],
          model: options.model,
          max_tokens: options.max_tokens,
          temperature: options.temperature,
          top_p: options.top_p,
          frequency_penalty: options.frequency_penalty,
          presence_penalty: options.presence_penalty
        }).then(resolve).catch(reject);
    });

}

module.exports = createChatCompletion;