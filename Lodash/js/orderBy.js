import _ from 'lodash';
import { users } from './data/users';

var sortedUsers = users.sort(function (user1, user2) {
  return user1.likes > user2.likes ? -1 : 1;
});

// method of sort works with parameters in turn
var sortedUsersByLike = _.orderBy(users, ['likes', 'name'], ['desc', 'asc']);

console.log(sortedUsers);
console.log(sortedUsersByLike);
