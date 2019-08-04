// const movies = require('../data/movies.json');
// const partial = require('../spec_partial/index');
// const map = require('../lists/map/index');
// const filter = require('../lists/filter/index');
// const forEach = require('../lists/for-each/index');

function compose(...fns) {
  return function (args) {
    let result = args;
    for (let fn of fns.reverse()) {
      result = fn(result);
    }

    return result;
  };
};

/** Problem */
// forEach(map(filter(movies, movie => movie.rating === 5.0), movie => movie.title), console.log)

/** Solution */

// let printGreatMovieTitles = compose(
//   partial(forEach, undefined, console.log),
//   partial(map, undefined, movie => movie.title),
//   partial(filter, undefined, movie => movie.rating === 5.0)
// );

// printGreatMovieTitles(movies);

module.exports = compose;