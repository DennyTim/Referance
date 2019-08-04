
function reduce(list, fn, initialValue) {
  let acc = null;

  if (initialValue !== undefined) {
    acc = initialValue;
  } else {
    acc = list[0];
  }

  if (initialValue) {
    for (let item of list) {
      acc = fn(acc, item, list);
    }
  } else {
    for (let i = 1; i < list.length; i++) {
      acc = fn(acc, list[i], list);
    }
  }

  return [acc];
}

// let result = reduce(
//   movies,
//   (rating, movie, list) => {
//     return (rating + movie.rating) / 2;
//   },
//   0
// );

module.exports = reduce;