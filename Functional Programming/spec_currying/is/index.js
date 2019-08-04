const curry = require('../curry');

let is = curry(function (fn, value) {
  return fn(value);
});

module.exports = is;