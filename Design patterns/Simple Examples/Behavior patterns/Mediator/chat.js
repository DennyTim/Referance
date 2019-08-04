class Chat {
    constructor() {
        this.users = [];
        this.publish = this.publish.bind(this);
    }

    subscribe(user) {
        user.onMessage = this.publish;
        this.users.push(user);
    }

    publish(origin, message) {
        for (let user of this.users) {
            if (origin !== user) {
                user.receive(origin, message);
            }
        }
    }
}

module.exports = Chat;