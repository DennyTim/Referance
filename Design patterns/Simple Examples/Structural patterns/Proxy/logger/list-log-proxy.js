const fs = require('fs');

class ListLogProxy {
    constructor(filename, list) {
        this.filename = filename;
        this.list = list;
    }

    get(value) {
        fs.appendFileSync(this.filename, `READ: ${value}`);

        return this.list.get();
    }
        
    add(value) {
        fs.appendFileSync(this.filename, `ADD: ${value}`);

        return this.list.add();
    }

    remove(value) {
        fs.appendFileSync(this.filename, `REMOVE: ${value}`);

        return this.list.find();
    }
}

module.exports = ListLogProxy;