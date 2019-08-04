function concatAll(list) {
  let res = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] instanceof Array) {
      res.push(...concatAll(list[i]));
    } else {
      res.push(list[i]);
    }
  }

  return res;
}

//let result = concatAll(map(movieLists, movieList => movieList.movies));

module.exports = concatAll;