// Task 3.2
let char1 = prompt("Enter the first character:");
let char2 = prompt("Enter the second character:");


if (char1.length == 1){
  if (char1 > char2) {
    alert(`${char2} comes first alphabetically.`);
  } else if (char1 < char2) {
    alert(`${char1} comes first alphabetically.`);
  } else {
    alert(`Both characters are the same.`);
  }
}
