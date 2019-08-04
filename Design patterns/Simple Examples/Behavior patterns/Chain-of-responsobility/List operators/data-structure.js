class Employee {
  constructor(name, position, priority, next = null) {
    this.name = name;
    this.position = position;
    this.priority = priority;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(name, position, priority) {
    this.head = new Employee(name, position, priority, this.head);
    this.size++;
  }

  //Insert last node
  insertLast(name, position, priority) {
    let node = new Employee(name, position, priority);
    let current;

    //If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  //Insert at index
  insertAt(name, position, priority, index) {
    // if index is out of range
    if (index < 0 || index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
      this.head = new Employee(name, position, priority, this.head);
      this.size++;
      return;
    }

    const node = new Employee(name, position, priority);
    let current = null;
    let previous = null;

    //Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.next; //Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index  
  getAt(index) {
    let current = this.head;
    let count = 0;

    if (index < 0 || index > this.size) {
      return;
    }

    while (current) {
      if (count === index) {
        console.log(current.data);
        return current.data;
      }

      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.head = current.next
    } else {
      while (count < index) {
        count++;
        previous = current; //Node before index
        current = current.next; //Node after index
      }

      previous.next = current.next;
    }

    this.size--;
  }

  //Clear list 
  clearList() {
    this.head = null;
    this.size = 0;
  }

  handleRequest(request) {
    let current = this.head;

    while (current) {
      if (request.priority === current.priority) {
        return `Request is handled by ${current.name} the ${current.position}`;
      }
      current = current.next;
    }
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current)
      current = current.next;
    }
  }
}

module.exports = List;