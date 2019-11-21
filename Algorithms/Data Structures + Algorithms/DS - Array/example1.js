class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shift(index);
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }

  reverse() {
    const arr = {};
    for (let i = this.length - 1, y = 0; i >= 0; i-- , y++) {
      arr[y] = this.data[i]
    }
    return arr;
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
// myArray.pop();
// myArray.deleteAtIndex(0);
// myArray.push('are');
// myArray.push('nice');
// myArray.shift();
console.log(myArray);
console.log(myArray.reverse())
