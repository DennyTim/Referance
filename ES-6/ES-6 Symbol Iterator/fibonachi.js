/**
 * Обьект с генерацией чисел фибоначчи 
 * */

let fib = {
  [Symbol.iterator]() {
    let cur = 1, pre = 0;
    return {
      next() {
        [cur, pre] = [cur + pre, cur];
        return { value: cur, done: false };
      }
    }
  }
};

for (let n of fib) {
  if (n > 20000) break;
  console.log(n);
}

/**
 *  Метод генератор чисел фибоначчи
 */

let genfib = {
  *[Symbol.iterator]() {
    let cur = 1, pre = 0;
    for (; ;) {
      [cur, pre] = [cur + pre, cur];
      yield cur;
    }
  }
};

for (let n of genfib) {
  if (n > 30000) break;
  console.log(n);
}