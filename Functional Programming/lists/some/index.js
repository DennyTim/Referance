'use strict';

function some(list, fn) {
  let result = false;

  for (let item of list) {
    result = result || fn(item);
  }

  return result;
}

module.exports = some;