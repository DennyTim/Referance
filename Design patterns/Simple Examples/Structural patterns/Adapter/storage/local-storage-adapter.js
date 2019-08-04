export default class LocalStorageAdapter {
    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    get length() {
        return this.localStorage.length;
    }

    getItem(key) {
        return Promise.resolve(this.localStorage.get(key));
    }

    setItem(key, value) {
        return Promise.resolve(this.localStorage.set(key, value));
    }

    clear() {
        return Promise.resolve(this.localStorage.clear());
    }

}   