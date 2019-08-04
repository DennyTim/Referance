class HtmlElement {
    constructor(name, content){
        this.name = name;
        this.content = content;
        this.children = [];
    }

    toString() {
        let output = '';

        output = '<' + this.name + '>';

        if(this.content) {
            output += this.content;
        }

        for (let field of this.children) {
            output += field.toString();
        }

        output += '</' + this.name + '>';

        return output;
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.root = new HtmlElement(rootName);
    }

    appendChild(name, content) {
        const element = new HtmlElement(name, content);
        this.root.children.push(element);
    }

    build() {
        return this.root.toString();
    }
}

module.exports = {
    HtmlElement,
    HtmlBuilder
}