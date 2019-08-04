const { HtmlBuilder } = require('./html');

const builder = new HtmlBuilder('ul');

builder.appendChild('li', 'hello');
builder.appendChild('li', 'world');

const html = builder.build();

console.log(html);