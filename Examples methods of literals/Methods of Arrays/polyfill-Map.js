var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){     //function(item){return item * 2}
    var newArray = [];

    console.log(this);                          // Array -> s = [23, 65, 98, 5];

    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));       // <- callback should be inside
    }
    return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);