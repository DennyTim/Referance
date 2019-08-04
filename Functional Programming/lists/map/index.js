function map(list, fn) {
  let res = [];

  for (let i = 0; i < list.length; i++) {
    res[i] = fn(list[i], i, list)
  }

  return res;
}

module.exports = map;