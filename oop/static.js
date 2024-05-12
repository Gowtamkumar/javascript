// static method: if you use this keyword function can use create without instnstance

class Chat {
  constructor(value) {
    this.value = value;
  }

  static getChat() {
    console.log("Got to chat");
  }
}

// const res = new Chat("gowtam")
console.log("🚀 ~ res:", Chat.getChat());
