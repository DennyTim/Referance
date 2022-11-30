import _ from 'lodash';

var newArr = [1, 2, 3].map((item) => {
  return item;
});

var newArrLodash = _.map(
  [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
  ],
  (item) => {
    return item.id;
  }
);

var users = [
  {
    id: '1',
    name: 'John',
  },
  {
    id: '2',
    name: 'Jack',
  },
];

var userNames = _.map(users, 'name');

var users2 = [
  {
    id: 1,
    firstName: 'John',
    status: 'active',
  },
  {
    id: 2,
    firstName: 'Mike',
    status: 'inactive',
  },
];

function normalizeUsers(users) {
  return _.map(users, (users) => {
    return {
      id: users.id,
      firstName: users.firstName,
      status: users.status === 'active',
    };
  });
}

console.log(newArr);
console.log(normalizeUsers(users2));
console.log(newArrLodash, userNames);
