const File = require('./file');

class FileProxy {
    constructor(filename) {
        this.filename = filename;
    }

    get contents() {
        this._contents = new File(this.filename);
        return this._contents;
    }
}

module.exports = FileProxy;