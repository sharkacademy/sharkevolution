let availableColors = ["red", "blue", "green", "yellow", "purple"];
let userInput = prompt("Enter three colors to check, separated by commas:");
let userColors = userInput.split(",").map(color => color.trim().toLowerCase());
let availableCount = 0;

for (let color of userColors) {
  if (availableColors.includes(color)) {
    alert(`${color} is available.`);
    availableCount++;
  } else {
    alert(`${color} is not available.`);
  }
}

alert(`You have ${availableCount} available color(s).`);
