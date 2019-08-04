import FormFiled from "./form-field";

export default class FormFieldDecorator extends FormFiled{
    constructor(formField) {
        this.formField = formField;
    }

    isValid() {
        return this.formField.isValid();
    }
}