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
