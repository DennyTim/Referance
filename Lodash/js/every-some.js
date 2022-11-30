import _ from 'lodash';

var users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jack',
    isActive: false,
  },
];

var check = _.every(users, { isActive: true }); //false
var checkSome = _.some(users, { isActive: true }); //true

console.log(check);
console.log(checkSome);
