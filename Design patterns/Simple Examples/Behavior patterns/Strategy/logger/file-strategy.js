const fs = require('fs');

class FileStrategy {
    constructor(filename) {
        this.filename = filename;
    }

    execute(value) {
        fs.appendFileSync(this.filename, value);
    }
}

module.exports = FileStrategy;