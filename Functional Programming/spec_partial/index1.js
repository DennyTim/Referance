function delay(fn, ms) {
  setTimeout(fn, ms);
}
//Частичное применение - передача параметров и 
//вызов позже после замены на реальные параметры 
function partial(fn, ...args) { //[undefined, 0]
  return function (...rest) { //[fn]
    let fullargs = args.map(arg => arg === undefined ? rest.shift() : arg); //[fn, 0]

    return fn(...fullargs);
  };
};

let wait = partial(delay, undefined, 0)
wait(() => console.log('Done'));