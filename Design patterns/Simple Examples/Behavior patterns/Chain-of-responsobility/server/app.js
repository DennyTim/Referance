const http = require('http');

class App {
    constructor() {
        this.handlers = [];
        this.handleRequest = this.handleRequest.bind(this);

        this.server = http.createServer(this.handleRequest);
    }

    use(fn) {
        this.handlers.push(fn);
    }

    listen(...args) {
        this.server.listen(...args);
    }

    handleRequest(req, res) {
        let index = 0;

        const next = () => {
            const handler = this.handlers[index++];

            if (handler) {
                handler(req, res, next);
            } else {
                this.defaultHandler(req, res);
            }
        };

        next();
    }

    defaultHandler(req, res) {
        res.write('Default handler');
        res.end();
    }
}

module.exports = App;