import FormFieldDecorator from './form-field-decorator.js';

export default class AutoCompleteFieldDecorator extends FormFieldDecorator {
    constructor(formField, autocomplete = 'on') {
        super(formField);
        this.autocomplete = autocomplete;
        this.formField.setAttribute('autocomplete', this.autocomplete);
    }
}