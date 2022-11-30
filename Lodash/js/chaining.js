import _ from 'lodash';
import { users } from './data/users';

//Without chain

// function getYoungestUser(users) {
//   const activeUsers = _.filter(users, 'isActive');
//   const sortedUsers = _.orderBy(activeUsers, ['age']);
//   const firstUser = sortedUsers[0];

//   return firstUser.name + ' is ' + firstUser.age;
// }

// console.log(getYoungestUser(users));

//With chain

const arr = _.chain(users).filter('isActive').orderBy(['age']).head().value();
console.log(arr);
