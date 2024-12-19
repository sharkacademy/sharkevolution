// Task 3.20
function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
  
  let largest1 = findLargest(3, 5, 2);
  alert("Largest 1: " + largest1); // 5
  
  let largest2 = findLargest(10, 8, 15);
  alert("Largest 2: " + largest2); // 15
  