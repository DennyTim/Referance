const Form = require('./form');
const form = new Form();

form.addFields(
    Form.createField(Form.FieldTypes.TEXT, { name: 'username', placeholder: 'Имя пользователя'}),
    Form.createField(Form.FieldTypes.EMAIL, { type: 'email', onchange: event => console.log(event)}),
    Form.createField(Form.FieldTypes.PASSWORD)
);