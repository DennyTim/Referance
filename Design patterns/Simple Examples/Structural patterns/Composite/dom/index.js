import DOM from './dom.js';

const buttons = DOM.get('button');

buttons.addClass('btn').addEventHandler('click', () => console.log('Click'));