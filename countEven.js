let numbers = [12, 7, 18, 5, 6, 4, 1, 3, 1]; // 4, 40

let count = 0;
let sum = 0;

for (let num of numbers) {
  if (num % 2 === 0) { 
    count++;
    sum += num;
  }
  if (sum > 50) { 
    console.log("Sum exceeded 50. Stopped early!");
    break;
  }
}

if (sum <= 50) {
  console.log(`Count of even numbers: ${count}`);
  console.log(`Sum of even numbers: ${sum}`);
}


let count = 0;
let sum = 0;
let loopActive = true; 

for (let i = 0; i < numbers.length && loopActive; i++) {
  let num = numbers[i];
  if (num % 2 === 0) {
    count++;
    sum += num;

    if (sum > 50) {
      console.log("Sum exceeded 50. Stopped early!");
      loopActive = false; 
    }
  }
}

if (sum <= 50) {
  console.log(`Count of even numbers: ${count}`);
  console.log(`Sum of even numbers: ${sum}`);
}
