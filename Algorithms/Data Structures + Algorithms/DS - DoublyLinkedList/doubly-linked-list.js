class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    /*D*/ this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    /*D*/ newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    /*D*/ this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    /**S const holdingPointer = leader.next */
    /*D*/ const follower = leader.next;

    leader.next = newNode;
    /**S newNode.next = holdingPointer; */
    /*D*/ newNode.next = follower;
    /*D*/ newNode.prev = leader;
    /*D*/ follower.prev = newNode;

    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const temp = leader.next;
    leader.next = temp.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      let curr = this._traverseToIndex(i);
      let curr2 = this._traverseToIndex(this.length - i - 1);
      [curr.value, curr2.value] = [curr2.value, curr.value];
    }
    return this;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(9);
myLinkedList.append(7);
myLinkedList.append(16);
// myLinkedList.insert(5, 99);
