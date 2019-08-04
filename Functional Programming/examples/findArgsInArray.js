function destroyer(arr) {
  let args = [...arguments].slice(1);
  return arr.filter(item => {
      if (args.indexOf(item) == -1) {
        return item;
      }
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));