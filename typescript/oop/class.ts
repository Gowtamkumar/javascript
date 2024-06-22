class Tasks {
  private id: number;
  private name: string;
  private age: number;
  private dob: string;
  private education: string;
  private completed: boolean;

  constructor(taskInfo: {
    id: number;
    name: string;
    age: number;
    dob: string;
    education: string;
    completed: boolean;
  }) {
    this.id = taskInfo.id;
    this.age = taskInfo.age;
    this.name = taskInfo.name;
    this.dob = taskInfo.dob;
    this.education = taskInfo.education;
    this.completed = taskInfo.completed;
  }

  private complete() {
    return (this.completed = true);
  }

  // method
  public test() {
    return this.complete();
  }
}

const results = new Tasks({
  id: 1,
  name: "gowtam kumar",
  age: 30,
  dob: "1999",
  education: "BSSS",
  completed: false,
});
console.log(results.test());
