class ToggleButton {
    constructor({ element, onTextContent, offTextContent, implementation }) {
        this.root = element;
        this.onTextContent = onTextContent;
        this.offTextContent = offTextContent;
        this.implementation = implementation;
        this.handleClick = () => this.toggle();

        this.init();
    }

    get toggled() {
        return this.implementation.hasClass('toggle-button--toggled');
    }

    set toogled(value) {
        this.toogle(value);
    }

    init() {
        this.implementation.addEventHandler(this.root, this.handleClick);
    }

    destroy() {
        this.implementation.removeEventHandler(this.root, this.handleClick);
    }

    toggle(isToggled = false) {
        let textContent;

        if(isToggled) {
            textContent = this.onTextContent;
            this.implementation.addClass('toggle-button--toggled');
        } else {
            textContent = this.offTextContent;
            this.implementation.removeClass('toggle-button--toggled');
        }

        this.root.textContent = this.implementation.setTextContent(textContent);
    }
}

const btn = new ToggleButton({
    element: document.querySelector('.toggle-button'),
    onTextContent: 'Выключить',
    offTextContent: 'Включить',
    implementation: {
        addClass: (element, className) => element.classList.add(className),
        removeClass: (element, className) => element.classList.remove(className),
        hasClass: className => this.element.classList.contains(className),
        setTextContent: (element, text) => element.textContent = text,
        addEventHandler: (element, event, handler) => { 
            element.addEventListener('click', handler)
        },
        removeEventHandler: (element, event, handler) => element.removeEventListener('click', handler)
    }
});