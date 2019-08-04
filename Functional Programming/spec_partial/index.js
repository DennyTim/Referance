function partial(fn, ...args) { //[undefined, 0]
  return function (...rest) { //[fn]
    let fullargs = args.map(arg => arg === undefined ? rest.shift() : arg); //[fn, 0]

    return fn(...fullargs);
  };
};

// let http = {
//   get(url, done) { },
//   post(url, data, done) { }
// }

// Частичная передача параметров

// let getUsers = partial(http.get, 'http://example.com')
// let createUsers = partial(http.post, 'http://example.com')

// getUsers(users => console.log(users));
// createUsers({}, users => console.log(users));

module.exports = partial;