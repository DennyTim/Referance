class Logger {
    constructor() {
        this.strategy = null;
    }

    log(value) {
        return this.strategy.execute(value);
    }
}

module.exports = Logger;