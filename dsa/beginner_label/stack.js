// stack is (LIFO)-> last-in first out
// call stack in javascript runtime
class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
    this.stackLen = 5;
  }

  isEmpty() {
    if (this.size === 0) {
      console.log("your stack is empty!");
    }
  }

  peek() {
    if (this.isEmpty()) {
      this.isEmpty();
    } else {
      console.log("get fron of the stack", this.stack[this.size - 1]);
    }
  }

  push(value) {
    if (this.size < this.stackLen) {
      this.stack[this.size] = value;
      this.size += 1;
    } else {
      console.log("Your stack is Full!");
    }
  }

  pop() {
    if (this.size > 0) {
      this.size -= 1;
      delete this.stack[this.size];
    } else {
      console.log("Your stack is Empty!");
    }
  }
}

const res = new Stack();
res.push(20);
res.push(5);
res.push(8);
res.push(7);
res.push(6);
res.peek();
// res.push(6);
res.pop();
res.peek();
// res.pop();
// res.pop();
// res.pop();
// res.pop();
// res.pop();
console.log("🚀 ~ res:", res);
