function whatIsInAName(collection, source) {
    var arr = [];
    let keys = Object.keys(source);
  
    arr = collection.filter((item) => {
      return keys.every((key) => {
        return item[key] === source[key];
      });
    });
    
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });