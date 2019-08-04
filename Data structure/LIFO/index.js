class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  push(value) {
    let oldFirst = this.root;
    this.root = new StackNode(value);
    this.root.next = oldFirst;
    this.n++;
  }

  pop() {
    if (this.isEmpty()) return null;
    let oldFirst = this.root;
    this.root = oldFirst.next;
    this.n--
    return oldFirst.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
console.log(stack);
console.log(stack.size());