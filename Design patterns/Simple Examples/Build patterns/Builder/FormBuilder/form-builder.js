class Form {
    constructor(fields) {
        this.element = document.createElement('form');
        for(let field of fields) {
            this.element.appendChild(field.element);
        }
    }
}

class FormBuilder {
    constructor() {
        this.fields = [];
        this.method = method;
        this.action = action;
    }

    setMethod(method) {
        this.method = method;
        return this;
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    addField (options) {
        let field = null;

        switch(options.type) {
            case 'text':
                field = new TextField(options);
                break;
            case 'email':
                field = new EmailField(options);
                break;
            case 'password': 
                field = new PasswordField(options);
                break;
            default:
                throw new Error(`Invalid field type: ${type}`);
        }

        this.fields.push(field);

        return this;
    }

    getForm() {
        const form = new Form(this.fields)
        return form;
    }
}

