let characters = [
  {name: "Garoto", class: "Warrior", level: 12},
  {name: "Spoleta", class: "Mage", level: 10},
  {name: "Cinza", class: "Shaman", level: 18},
  {name: "Sorvetinho", class: "Rogue", level: 14}
];

for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  if (character.class === "Mage") {
    console.log(character.name + " não pode participar da missão!");
    continue;
  }
  if (character.level > 15) {
    console.log(character.name + " será o líder da missão!");
    break;
  }
  console.log(character.name + " participará da missão.");
}


// let questActive = true; 

// for (let i = 0; i < characters.length && questActive; i++) { // i = 2, i < 4 && questActive == true
//   let character = characters[i];

//   if (character.class === "Mage") {
//     console.log(character.name + " não pode participar da missão!");
//   } else if (character.level > 15) {
//     console.log(character.name + " será o líder da missão!");
//     questActive = false; 
//   } else {
//     console.log(character.name + " participará da missão.");
//   }
// }
