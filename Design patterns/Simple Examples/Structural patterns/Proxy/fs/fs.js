const fs = require('fs');

module.exports = {
    readFile(path, format, callback) {
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error(`Can only read .md files.`));
        }

        fs.readFile(path, format, callback);
    }
};