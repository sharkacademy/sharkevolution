// Task 4.2
let person = {
  name: "John",
  age: 30,
  introduce() {
    alert(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
  
person.introduce();
  