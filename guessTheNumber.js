// Task 3.3
// let secretNumber = 7;
// let guess = prompt("Guess the secret number (between 1 and 10):");
// let guessCorrected = parseInt(guess);

// if (guessCorrected > secretNumber) {
//   alert("Too high!");
// } else if (guessCorrected < secretNumber) {
//   alert("Too low!");
// } else {
//   alert("Correct!");
// }


















let secretNumber = 7;
let notGuessed = true;

while (notGuessed) {
  let guess = prompt("Guess the secret number (between 1 and 10):");
  let guessCorrected = parseInt(guess);
  if (guessCorrected > secretNumber) {
  alert("Too high!");
} else if (guessCorrected < secretNumber) {
  alert("Too low!");
} else {
  notGuessed = false;
  alert("Correct!");
}
}