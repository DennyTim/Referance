function alphabeticalOrder(arr) {
    return arr.sort(function(a, b){
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));