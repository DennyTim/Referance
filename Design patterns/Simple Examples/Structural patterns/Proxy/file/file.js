const fs = require('fs');

class File {
    constructor(filename) {
        this.contents = fs.readFileSync(filename, 'utf-8');
    }
}

module.exports = File;