const linearSearch = require('./linear-search');
const binarySearch = require('./binary-search');

const length = Number(process.argv[2]);
const array = [];

for (let i = 0; i < length; i++){
    array[i] = i + 1;
}

{
    console.time('Линейный поиск');
    const [index, steps] = linearSearch(array, length);
    console.timeEnd('Линейный поиск');
    console.log(index, steps);
}

{   
    console.time('Бинарный поиск');
    const [index, steps] = binarySearch(array, length);     //важно отсортировать
    console.timeEnd('Бинарный поиск');
    console.log(index, steps);
}




