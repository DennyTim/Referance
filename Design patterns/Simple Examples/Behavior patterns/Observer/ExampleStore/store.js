class Store {
    constructor(state) {
        this.state = state;
        this.observers = new Set();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    updateState(updater) {
        this.state = updater(this.state);
        this.notifyObservers();
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer(this.state);
        }
    }
}

module.exports = Store;