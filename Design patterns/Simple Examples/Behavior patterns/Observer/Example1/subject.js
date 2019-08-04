class Subject {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        this.events[event] = this.events[event] || new Set();
        this.events[event].add(listener);
    }

    off(event, listener) {
        if (this.events[event].has(listener)) {
            this.events[event].delete(listener);
        }
    }

    emit(event, ...args) {
        for (let listener of this.events[event]) {
            listener.update(...args);
        }
    }
}

module.exports = Subject;