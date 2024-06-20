class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // linklist a first add kora
  preAppend(value) {
    const newNode = new Node(value);
    if (!newNode) {
      console.log("new node is not create");
      return;
    }
    if (this.size == 0) {
      this.head = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  remove(value) {
    if (this.head.data == value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next != null) {
      if (current.next.data === value) {
        this.size--;
        break;
      }
      current = current.next;
    }

    if (current == null) {
      return this.head;
    }
    current.next = current.next.next;
  }
  //link list a last add kora
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  // insert 
  insert(value, whereInsert) {
    const addNewNode = new Node(value);

    if (!addNewNode) {
      console.log("new node is not create");
      return;
    }

    if (this.size == 0) {
      this.head = addNewNode;
      this.size++;
    }

    let current = this.head;
    while (current.next != null) {
      if (current.data == whereInsert) {
        break;
      }
      current = current.next;
    }

    if(current.next == null){
      return this.head
    }

    addNewNode.next = current.next;
    current.next = addNewNode;
  }

  // traversal

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  peek(value) {
    let current = this.head;
    while (current.next != null) {
      if (current.next.data == value) {
        break;
      }
      current = current.next;
    }
    if (current.next == null) {
      console.log("not found");
      return;
    }
    console.log(current.next);
  }
}

const resutl = new LinkList();
resutl.preAppend(10);
resutl.preAppend(11);
resutl.preAppend(30);
resutl.preAppend(40);
// resutl.append(22);
// resutl.append(44);
resutl.print();
// resutl.remove(22);
// resutl.peek(22);
// resutl.insert(99, 22);
// console.log("ddd");
// resutl.print();

// class Node {
//   constructor(value) {
//     this.data = value;
//     this.next = null;
//   }
// }

// class LinkList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   //link list a first add kora
//   prepend(value) {
//     const newNode = new Node(value);
//     if (!newNode) {
//       console.log("new node is not create");
//       return;
//     }

//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.size++;
//   }

//   //link list a last add kora
//   append(v) {
//     const newNode = new Node(v);
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.size++;
//     } else {
//       let pre = this.head;
//       while (pre.next) {
//         pre = pre.next;
//       }
//       pre.next = newNode;
//     }
//   }

//   insert(value, idex) {
//     if (idex < 0 || idex > this.size) {
//       return;
//     }
//     if (idex === 0) {
//       this.prepend(value);
//     } else {
//       const newNode = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < idex - 1; i++) {
//         prev = prev.next;
//       }
//       newNode.next = prev.next;

//       prev.next = newNode;
//       this.size++;
//     }
//   }

//   remove(idx) {
//     if (idx < 0 || idx >= this.size) {
//       return null;
//     }

//     let removeData;
//     if (idx === 0) {
//       removeData = this.head;
//       this.head = this.head.next;
//     }

//     let prev = this.head;
//     for (let i = 0; i < idx - 1; i++) {
//       console.log("dd", prev.next);
//       prev = prev.next;
//     }
//     removeData = prev.next;
//     prev.next = removeData.next;
//     this.size--;
//     return removeData.value;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     return (this.head = prev);
//   }

//   find(v) {
//     let current = this.head;
//     let result = {};
//     while (current.next) {
//       if (v === current.data) {
//         result = current;
//       }
//       current = current.next;
//     }
//     return result;
//   }

//   print() {
//     let current = this.head;
//     while (current != null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const res = new LinkList();
// res.append(20);
// res.prepend(30);
// res.prepend(40);
// res.prepend(50);
// res.append(60);
// res.insert(22, 4);
// res.remove(4);
// res.print();
// const resss = res.reverse();
// console.log(resss);
