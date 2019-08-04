const List = require('./data-structure');
const ll = new List();

const request = {
  priority: 'low'
};

ll.insertLast('Alan', 'Operator', 'low');
ll.insertLast('Bob', 'Technician', 'medium');
ll.insertLast('Charlie', 'Specialist', 'high');
console.log(ll.handleRequest(request));
