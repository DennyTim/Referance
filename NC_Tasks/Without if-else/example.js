const array = [1, 2, 3, 4, 5, 6, 7, 8];
let counter = 0;

array.forEach(item => {
  // if (item % 2) {
  //     counter += 1;
  // }
  const number = Math.abs(item % 2);
  counter += number;
});

console.log(counter);
