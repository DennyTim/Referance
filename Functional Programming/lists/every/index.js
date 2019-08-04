'use strict'

function every(list, fn) {
  if (!list) throw Error('Список не передан');

  let result = true;

  for (let item of list) {
    result = result && fn(item);
  }

  return result
}

module.exports = every;