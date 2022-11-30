import _ from 'lodash';
// Flatten
var numbers = [
  [1, 2],
  [3, 4],
];

var result = [].concat([], ...numbers);
var result2 = _.flatten(numbers);
console.log(result);
console.log('flatten', result2);
