import _ from 'lodash';

var users = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Jack',
  },
  {
    id: 3,
    name: 'John',
  },
];

var john = _.find(users, { id: 1 });

console.log(john);
