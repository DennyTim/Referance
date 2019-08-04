class TextField {
    constructor(props) {
        this.element = DOM.createElement('input', props);
    }
}

class EmailField {
    constructor(props) {
        this.element = DOM.createElement('input', props);
    }
}

class PasswordField {
    constructor(props) {
        this.element = DOM.createElement('input', props);
    }
}

module.exports = {
    TextField,
    EmailField,
    PasswordField
}