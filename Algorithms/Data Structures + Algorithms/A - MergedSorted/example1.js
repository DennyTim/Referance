/**
 * -- define empty array
 * -- define last index of first array
 * -- define last index of last array
 * -- define two starting point
 * -- Checking, if one of arrays is empty
 */

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {      //если хотябы один из первых индексов true заходим в цикл
    if (!array2Item || array1Item < array2Item) { //если первый индекс второго массива false или больше первого
      mergedArray.push(array1Item)      //добавляем в массив с первый индекс, и смещаем на второй
      array1Item = array1[i];         
      i++;                              
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30, 5, 10]));
