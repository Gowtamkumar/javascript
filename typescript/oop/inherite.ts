class PersonExpmleInterit {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getSomthing(v: string): string {
    return this.name + " " + v;
  }
}

class PersonEx extends PersonExpmleInterit {
  private nice: string;
  constructor(name: string, age: number, nice: string) {
    super(name, age);
    this.nice = nice;
  }
}

const resultInherit = new PersonEx("Gowtma", 30, "yes");

console.log(resultInherit);
