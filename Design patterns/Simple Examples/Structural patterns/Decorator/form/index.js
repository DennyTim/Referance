import FormField from './form-field.js';
import MaxLengthFieldDecorator from './maxlength-form-field-decorator.js';
import AutoCompleteFieldDecorator from './autocomplete-form-field-decorator.js';

const form = document.createElement('form');

let formField = new FormField();

formField = new MaxLengthFieldDecorator(formField, 255);
formField = new AutoCompleteFieldDecorator(formField, 'off');

form.appendChild(formField.element);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (formField.isValid()) {
        form.submit();
    } else {
        alert('Please correct the issues in the form field.');
    }
});

document.body.appendChild(form);