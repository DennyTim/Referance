function checkPositive(arr) {
    return arr.some((item) => item > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));