'use strict'

function forEach(list, fn) {
  for (let item of list) {
    fn(item)
  }
}

module.exports = forEach;