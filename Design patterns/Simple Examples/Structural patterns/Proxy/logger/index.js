const List = require('./list');
const ListLogProxy = require('./list-log-proxy');

const list = new ListLogProxy('log.txt', new List());

list.add('Hello');