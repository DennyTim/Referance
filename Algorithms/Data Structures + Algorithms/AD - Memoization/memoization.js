function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();
memoized(5);
memoized(5);
memoized(10);

/*---------------------------*/

let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n > 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();
fasterFib(6);
