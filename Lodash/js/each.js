import _ from 'lodash';

const native = [1, 2].forEach((item) => {
  console.log(item);
});

const lodash = _.each([1, 2], function (item) {
  console.log(item);
});

console.log(native, lodash);

var items = {
  1: {
    name: 'Milk',
  },
  2: {
    name: 'Bread',
  },
};

var arr = [];

_.each(items, function (item, index) {
  console.log(item, index);
  arr.push(item);
});

console.log(arr);
