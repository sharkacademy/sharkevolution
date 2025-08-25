let secretNum = Math.floor(Math.random() * 100) + 1;
console.log(secretNum);
let guess = prompt("Guess the number (between 1 and 100):");
let guessCorrected = parseInt(guess);

if (guessCorrected > secretNum) {
  alert("Too high!");
} else if (guessCorrected < secretNum) {
  alert("Too low!");
} else {
  alert("Correct!");
}
