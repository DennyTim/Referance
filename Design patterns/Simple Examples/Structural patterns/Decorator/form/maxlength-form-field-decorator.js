import FormFieldDecorator from './form-field-decorator.js';

export default class MaxLengthFieldDecorator extends FormFieldDecorator {
    constructor(formField, maxLength = 100) {
        super(formField);

        this.maxLength = maxLength;
        this.formField.element.setAttribute('maxlenght', this.maxLength);
    }

    isValid() {
        return (this.formField.element.value.length <= this.maxLength && super.isValid());
    }
}