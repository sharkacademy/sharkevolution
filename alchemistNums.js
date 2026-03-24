let num1 = "25.5";
let num2 = "30.7";

let intNum1 = parseInt(num1);
let floatNum2 = parseFloat(num2);
alert(intNum1);
alert(floatNum2);

let addNum = intNum1 + floatNum2;
alert(addNum);

let roundedRes = Math.round(addNum);
let flooredRes = Math.floor(addNum);
let ceiledRes = Math.ceil(addNum);

alert(roundedRes);
alert(flooredRes);
alert(ceiledRes);