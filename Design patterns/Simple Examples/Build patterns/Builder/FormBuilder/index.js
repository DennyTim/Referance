let formBuilder = new FormBuilder();

formBuilder
    .setMethod('post')
    .setAction('/login')
    .addField({ type: 'text',  name: 'username' })
    .addField({ type: 'email',  name: 'email' })
    .addField({ type: 'password',  name: 'password' });

let form = formBuilder.getForm();