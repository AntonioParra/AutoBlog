const axios = require('axios');
const fs = require('fs');

const fetchImage = (url, imgName) => {
    return new Promise(async (resolve, reject) => {
        axios.get(url, { responseType: 'arraybuffer' }).then(response => {
            fs.writeFile(imgName, response.data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    });
}

module.exports = fetchImage;