// class CircularQueue {
//   constructor() {
//     this.queue = [];
//     this.size = 5;
//     this.head = 0;
//     this.tail = 0;
//   }

//   isFull() {
//     if (this.tail - this.head === this.size) {
//       console.log("This queue is full!");
//     }
//   }

//   enqueue(value) {
//     if (this.isFull()) {
//       return this.isFull();
//     }
//     this.queue[this.tail] = value;
//     this.tail = (this.tail + 1) % (this.size + 1);
//   }

//   isEmpty() {
//     if (this.tail - this.head === 0) {
//       console.log("this queue is Empty");
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return this.isEmpty();
//     }
//     delete this.queue[this.head];
//     this.head = (this.head + 1) % (this.size + 1);
//   }

//   isSize() {
//     console.log("queue is is: ", this.tail - this.head);
//   }

//   print() {
//     return this.queue.toString();
//   }
// }

// const res = new CircularQueue();
// res.enqueue(20);
// res.enqueue(10);
// res.enqueue(30);
// res.enqueue(30);
// res.enqueue(30);
// console.log("🚀 ~ res.print();:", res.print());
// res.dequeue();
// res.dequeue();
// res.dequeue();
// res.dequeue();
// res.dequeue();
// res.isSize();
// res.dequeue();
// // console.log("print", res.print());
// console.log("🚀 ~ res:", res);
