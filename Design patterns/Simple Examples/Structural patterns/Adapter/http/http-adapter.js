export default class HttpAdapter {
    constructor(http) {
        this.http = http;
    }

    get(url) {
        return new Promise((resolve, reject) => {
            this.http.request('GET', url, null, resolve);
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this.http.request('POST', url, data, resolve);
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            this.http.request('PUT', url, data, resolve);
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            this.http.request('DELETE', url, null, resolve);
        });
    }
}