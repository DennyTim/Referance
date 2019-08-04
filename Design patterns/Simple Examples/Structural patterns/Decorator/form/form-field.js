export default class FormField {
    constructor(props) {
        this.props = props;
        this.element = document.createElement('input');
    }

    isValid() {
        return this.element.value !== '';
    }
}