import _ from 'lodash';

var users = {
  1: {
    id: '1',
    name: 'John',
  },
  2: {
    id: '2',
    name: 'Jack',
  },
};

// var newArr = _.filter(users, function (item) {
//   return item.name === 'John';
// });

var newArr = _.filter(users, { name: 'John' }); //0: {id: "1", name: "John"}

var products = [
  {
    id: 1,
    name: 'milk',
    price: '1$',
  },
  {
    id: 2,
    name: 'milk',
    price: '1$',
  },
  {
    id: 3,
    name: 'meat',
    price: '3$',
  },
];

function searchProducts(products, searchedValue) {
  return _.filter(products, function (product) {
    return _.includes(product.name, searchedValue);
  });
}

console.log(searchProducts(products, 'me')); //{id: 3, name: "meat", price: "3$"}
