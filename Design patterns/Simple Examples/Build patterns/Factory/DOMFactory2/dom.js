class Dom {
    static createElement(type, props, ...children) {
        const element = document.createElement(type);

        Object.keys(props).forEach(key => element[key] = props[key]);

        children.forEach(child  => {
            if(typeof child === 'string') {
                child = document.createTextNode(child);
            }

            element.appendChild(child);
        });

        return element;
    }

    static createFactory(type) {
        return DOM.createElement.bind(null, type);
    }
}