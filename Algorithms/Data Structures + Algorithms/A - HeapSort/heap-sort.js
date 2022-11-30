// create max heap
function maxHeap(array, i, arrLength) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && array[left] > array[max]) {
    max = left;
  }

  if (right < arrLength && array[right] > array[max]) {
    max = right;
  }

  if (max != i) {
    swap(array, i, max);
    maxHeap(array, max, arrLength);
  }
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}

function heapSort(array) {
  debugger;

  let arrLength = array.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i--) {
    maxHeap(array, i, arrLength);
  }

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    arrLength--;

    maxHeap(array, 0, arrLength);
  }
  return;
}

const list = [4, 2, 3, 1, 5];

const sorted = heapSort(list);

console.log(list);
