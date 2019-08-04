function spinalCase(str) {
  var regex = /\s+|_+/g;
  let arr = str.replace(regex, ' ').split(/\s|_|(?=[A-Z])/g).join('-').toLowerCase();
  return arr;
}

console.log(spinalCase('The_Andy_Griffith_Show'));