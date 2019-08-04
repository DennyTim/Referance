const movies = require('./data/movies.json');

function partial(fn, ...args) {
  return function (...rest) {
    let fullargs = args.map(arg => arg === undefined ? rest.shift() : arg);

    return fn(...fullargs);
  };
};

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

function forEach(list, fn) {
  for (let item of list) {
    fn(item)
  }
}

function filter(list, fn) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    if (fn(list[i], i, list)) {
      result.push(list[i]);
    }
  }

  return result;
}

function map(list, fn) {
  let res = [];

  for (let i = 0; i < list.length; i++) {
    res[i] = fn(list[i], i, list)
  }

  return res;
}

function compose(...fns) {
  return function (args) {
    let result = args;
    for (let fn of fns.reverse()) {
      result = fn(result);
    }

    return result;
  };
};

function pipe(...fns) {
  return function (args) {
    let result = args;
    for (let fn of fns) {
      result = fn(result);
    }

    return result;
  };
};

// let printGreatMovieTitles = compose(
//   partial(forEach, undefined, console.log),
//   partial(map, undefined, movie => movie.title),
//   partial(filter, undefined, movie => movie.rating === 5.0)
// );

let printGreatMovieTitles = pipe(
  partial(filter, undefined, movie => movie.rating === 5.0),
  partial(map, undefined, movie => movie.title),
  partial(forEach, undefined, console.log)
);

printGreatMovieTitles(movies);


