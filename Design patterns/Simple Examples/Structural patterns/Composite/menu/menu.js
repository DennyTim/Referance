class Menu {
    constructor(name, ...children) {
        this.name = name;
        this.children = children;
    }

    add(menuItem) {
        this.children.push(menuItem);

        return this;
    }

    remove(menuItem) {
        this.children.remove(menuItem);

        return this;
    }

    render(depth = 0) {
        console.log(`${'  '.repeat(depth)}/${this.name}`);

        for (let child of this.children) {
            child.render(depth + 1);
        }
    }
}

module.exports = Menu;