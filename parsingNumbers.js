// Task 2.1
let num1 = "25.5";
let num2 = "30.7";

let intNum1 = parseInt(num1); // 25
let floatNum2 = parseFloat(num2); // 30.7

let addNum = intNum1 + floatNum2;
alert(addNum); // 55.7

let roundedRes = Math.round(addNum); // 56
let flooredRes = Math.floor(addNum); // 55
let ceiledRes = Math.ceil(addNum); // 56

alert(roundedRes);
alert(flooredRes);
alert(ceiledRes);
