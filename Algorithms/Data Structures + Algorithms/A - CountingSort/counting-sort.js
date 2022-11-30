function countingSort(list, min, max) {
  let z = 0;
  const count = [];

  for (let a = min; a <= max; a++) {
    count[a] = 0;
  }

  for (let b = 0; b < list.length; b++) {
    count[list[b]]++;
  }

  for (let c = min; c <= max; c++) {
    while (count[c]-- > 0) {
      list[z++] = c;
    }
  }
  return list.slice(-count.length);
}

const list = [4, 2, 3, 1, 5];
const min = Math.min(...list);
const max = Math.max(...list);
const sorted = countingSort(list, min, max);

console.log(sorted);
