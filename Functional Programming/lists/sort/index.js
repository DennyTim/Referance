function sort(list, compare) {
  let temp = [...list];

  return temp.sort(compare);
}

module.exports = sort;