'use strict'

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function (...next) {
        return curried(...args, ...next);
      }
    }

    return fn(...args);
  }
}

// let createLog = curry(function (fn, prefix, message) {
//   return fn(`${prefix}: ${message}`);
// });

// let log = createLog(console.log)('LOG');
// let logError = createLog(console.log)('Error');
// let logInfo = createLog(console.log)('INFO');
// let writeToDOM = createLog(document.write)('DOM');

// log('currying');
// logError('TypeError');

module.exports = curry;