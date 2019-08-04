'use strict'

function forEachProp(obj, fn) {
  let keys = Object.keys(obj);

  for (let item of keys) {
    fn(item, obj[item])
  }
}

module.exports = forEachProp;