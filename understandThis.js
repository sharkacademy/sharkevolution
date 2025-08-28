let person = {
  name: "Garoto",       
  age: 5,   
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  },
  celebrateBirthday() {
    this.age++; 
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  }
};

person.introduce();         
person.celebrateBirthday(); 
person.introduce();         
 