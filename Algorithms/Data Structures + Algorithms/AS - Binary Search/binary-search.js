function binarySearch(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let steps = 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.round((startIndex + endIndex) / 2);
    let middleValue = array[middleIndex];

    if (value < middleValue) {
      endIndex = middleIndex - 1;
      steps += 1;
    } else if (value > middleValue) {
      startIndex = middleIndex + 1;
      steps += 1;
    } else {
      return [middleIndex, steps];
    }
  }

  return [-1, steps];
}

console.log(
  binarySearch(
    [34, 5, 6, 733, 33].sort((a, b) => a - b),
    733
  )
);
