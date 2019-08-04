function checkPositive(arr) {
    return arr.every(item => item > 0);
}
console.log(checkPositive([1, 2, 3, 4, 5]));