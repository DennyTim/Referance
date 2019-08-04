//@returned
// [1, 2, 3] [-1, -2, -3] -> [0, 0, 0]
function zip(left, right, fn) {
  let result = [];

  for (let i = 0; i < Math.min(left.length, right.length); i++) {
    result.push(fn(left[i], right[i]));
  }

  return result;
}

// let result = zip(movies, bookmarks, (movie, bookmark) => {
//   return Object.assign({}, movie, { bookmark });
// });

module.exports = zip;