class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0
  }

  isEmpty() {
    return this.first == null;
  }

  size() {
    return this.n;
  }

  enqueue(value) {
    let oldLast = this.last;
    this.last = new QueueNode(value);

    if (this.isEmpty()) this.first = this.last;
    else oldLast.next = this.last;

    this.n++;
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last == null;
      return null;
    }

    let itemValue = this.first.value;
    this.first = this.first.next;
    this.last == null;

    this.n--;

    return itemValue;
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(true);
queue.enqueue({});
queue.enqueue('string');
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.size());
console.log(queue.isEmpty());

console.log(queue);
