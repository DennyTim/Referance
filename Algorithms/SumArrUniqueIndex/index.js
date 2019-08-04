var twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < nums.length; y++) {
      if (i !== y && nums[i] + nums[y] === target) {
        arr.push(i, y)
      }
    }
    if (arr.length) {
      break;
    }
  }
  return arr.sort();
};

console.log(twoSum([3, 2, 4], 6))