export default class Repository {
    constructor(baseUrl, resource, http){
        this.baseUrl = baseUrl;
        this.resource = resource;
        this.http = http;
    }

    get url() {
        return `${this.baseUrl}/${this.resource}`;
    }

    getAll() {
        return this.http.get(this.url);
    }

    getOne(id) {
        return this.http.get(`${this.url}/${id}`);
    }

    create(data) {
        return this.http.post(this.url, data);
    }

    update(id, data) {
        return this.http.put(`${this.url}/${id}`, data);
    }

    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}