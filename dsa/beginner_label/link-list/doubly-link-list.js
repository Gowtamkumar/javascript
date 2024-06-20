class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // link list ar frist a add
  // unshift and preappend same
  unshift(value) {
    const newNode = new Node(value);
    if (!newNode) {
      console.log("Node is not created");
      return;
    }
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.size++;
    }
  }
  // linklist ar last a add
  // push and append same
  push(value) {
    const newNode = new Node(value);
    if (!newNode) {
      console.log("Node is not created");
      return;
    }

    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.size++;
    }
  }

  // remove first elemnet
  shift() {
    if (this.size == 0) {
      console.log("empty linklist");
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  // remove last element
  pop() {
    if (this.size == 0) {
      console.log("Employ linklist");
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
    console.log(this.tail);
  }

  remove(value) {
    let current = this.head;
    while (current.next != null) {
      if (current.data === value) {
        break;
      }
      current = current.next;
    }
    if (current.next == null) {
      return this.head;
    }
    current.prev.next = current.next;
    this.size--;
  }

  insert(value, whereInsert) {
    const newNode = new Node(value);
    if (!newNode) {
      console.log("new node is not create");
      return;
    }

    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      let current = this.head;
      while (current.next != null) {
        if (current.data == whereInsert) {
          break;
        }
        current = current.next;
      }

      // console.log("🚀 ~ DoublyLinkList ~ current:", current)
      newNode.next = current.next;
      current.next = newNode;
      newNode.prev = current.prev;
      this.size++;
    }
  }
  // peek and find
  peek(value) {
    let current = this.head;
    while (current.next != null) {
      if (current.data == value) {
        break;
      }
      current = current.next;
    }
    if (current.next == null) {
      console.log("not found");
      return;
    }

    console.log(current);
  }
  // show all data
  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  travers() {
    let current = this.tail;
    while (current != null) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

const result = new DoublyLinkList();
result.unshift(10); // preappend
result.unshift(20); // preappend
result.unshift(30); // preappend
// result.print();
result.push(99); // append
result.push(100); // append
// result.print();
// result.shift();
// result.remove(500);
// result.pop();
result.insert(600, 20); // first paramister add data and second paramiter is kothai insert hobe
// result.peek(10);// find one
result.print();
result.travers();

// console.log(result);
