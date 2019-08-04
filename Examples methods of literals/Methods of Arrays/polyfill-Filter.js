let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArray = [];
  this.forEach((item) => {
    if (callback(item) == true) newArray.push(item);
  })
  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s)