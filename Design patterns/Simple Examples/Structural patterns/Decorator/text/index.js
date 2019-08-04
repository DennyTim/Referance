class Text {
    constructor(content) {
        this.content = content;
    }

    toString() {
        return this.content.toString();
    }
}

class CapsTextDecorator extends Text{
    constructor(component) {
        super();
        this.component = component;
    }

    toString() {
        return this.component.toString().toUpperCase();
    }
}

class HeaderTextDecorator extends Text{
    constructor(component) {
        super();
        this.component = component;
    }

    toString() {
        const length = this.component.toString().length;

        return ''.padStart(length, '=') + '\r\n' + this.component.toString() + '\r\n' + ''.padEnd(length, '=');
    }
}

const text = new Text('Decorator');

const capsText = new CapsTextDecorator(text);
const headerCapsText = new HeaderTextDecorator(capsText);

console.log(headerCapsText.toString());