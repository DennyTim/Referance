const sort = require('../sort');

function sortBy(prop) {
  return (a, b) => {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;

    return 0;
  };
}

//@Example

// let users = [
//   { id: 5, firstname: 'Denny' },
//   { id: 2, firstname: 'Ben' },
//   { id: 3, firstname: 'Juliya' },
//   { id: 4, firstname: 'Johny' },
//   { id: 1, firstname: 'Boby' }
// ];

// let sortById = sortBy('id');
// let sortByFirstname = sortBy('firstname');
// let numbersSorted = sort(users, sortByFirstname);

// console.log(users);
// console.log(numbersSorted);

module.exports = sortBy;