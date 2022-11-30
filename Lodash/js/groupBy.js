import _ from 'lodash';
import { users } from './data/users';

// Plain js

// function groupBy(list, prop) {
//   return list.reduce(function (aggregator, element) {
//     console.log('reduce', list, prop, aggregator, element);
//     (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
//     return aggregator;
//   }, {});
// }

//console.log(groupBy(users, 'isActive'));

const arr = _.groupBy(users, function (user) {
  return user.isActive;
});

console.log(arr);
