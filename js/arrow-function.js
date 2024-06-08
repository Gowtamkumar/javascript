// arrow function inner not working this keyword because.
//  that function lexcial context not exisit that way not find this keywork
const Person = () => {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
};

const result = Person();
console.log("🚀 ~ result:", result);
