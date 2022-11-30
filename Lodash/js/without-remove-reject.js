import _ from 'lodash';
import { users } from './data/users';

var initialArr = [1, 2, 3];
var removedArr = _.without(initialArr, 1, 3); // [2]

var initialList = [
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

const activeUsers = _.remove(initialList, (user) => {
  return !user.isActive;
});

var initialData = [
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

const isActiveUsers = _.reject(initialData, (user) => {
  return !user.isActive;
});

// [2]
console.log('without', removedArr);

// deletedItem: {id: 2, name: "Jack", isActive: false}
console.log('remove', activeUsers); // !!! modify exist array

// new array: [{id: 1, name: "John", isActive: true}]
console.log('reject', isActiveUsers);

// Remove quiz

function getPopularUsers(users) {
  return _.reject(users, function (user) {
    return !user.isActive || user.likes < 100;
  });
}

console.log('quiz', getPopularUsers(users));
