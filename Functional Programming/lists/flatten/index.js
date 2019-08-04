//TODO:
// [ [], [], [] ] => []
function flatten(lists) {
  let results = [];

  for (let list of lists) {
    results.push.apply(results, list);
  }

  return results;
}

//let result = flatten(map(movieLists, movieList => movieList.movies));

module.exports = flatten;