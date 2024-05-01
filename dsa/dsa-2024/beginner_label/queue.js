// queue dsa is (FIFO)
class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
    this.len = 7;
  }

  isEmpty() {
    if (this.size === 0) {
      console.log("this queue is Empty!");
    }
  }

  enqueue(value) {
    if (this.len === this.size) {
      console.log("your queue size full");
    } else {
      this.items[this.size] = value;
      this.size++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return this.isEmpty();
    } else {
      this.size--;
      delete this.items[this.size];
    }
  }

  print() {
    return this.items.toString();
  }

  // enqueue(value) {
  //   this.items.push(value);
  // }

  // dequeue() {
  //   this.items.shift();
  // }
}

const res = new Queue();

res.enqueue(20);
res.enqueue(30);
res.enqueue(30);
res.enqueue(30);
res.enqueue(30);

console.log(res.print());
// res.dequeue();
// res.dequeue();

// console.log(res);
