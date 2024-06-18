class CircularQueue {
  constructor(size) {
    this.items = [];
    this.size = size;
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    if (this.isFull()) {
      console.log(`this circular queue is full`);
      return;
    }

    this.tail = (this.tail + 1) % this.size;
    this.items[this.tail] = item;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log(`this circular queue is Empty`);
      return;
    }

    this.head = (this.head + 1) % (this.size + 1);
    delete this.items[this.head];
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }

  isEmpty() {
    if (this.head === this.tail) {
      return true;
    }
  }

  print() {
    return this.items.toString();
  }
  isSize() {
    console.log(`circular queue is size:`, this.tail - this.head);
  }

  peek() {
    if (this.isEmpty()) {
      console.log(`this circular queue is Empty`);
      return;
    }
    return this.items[this.head];
  }
}

const result = new CircularQueue(3);
// console.log("🚀 ~ result:", result);
result.enqueue(20);
result.enqueue(300);
result.enqueue(28);
console.log("🚀 ~ result:", result);
// result.enqueue(28);
// result.dequeue();
// result.dequeue();
// result.dequeue();
console.log("🚀 ~ result:", result);
