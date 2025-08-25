let person = {
  name: "Aureliano",
  age: 20,
  member: false
};

let withMember = true; 

if ((person.age > 18 && person.member) || (person.age > 18 && withMember)) {
  console.log(`${person.name} can enter the club!`);
} else {
  console.log(`${person.name} cannot enter the club.`);
}
