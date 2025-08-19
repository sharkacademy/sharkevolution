let num1 = "25.5";
let num2 = "30.7";

let intNum1 = parseInt(num1); 
let floatNum2 = parseFloat(num2); 
alert("First number translated: " + intNum1); 
alert("Second number translated: " + floatNum2); 

let addNum = intNum1 + floatNum2;
alert("Result: " + addNum); 

let roundedRes = Math.round(addNum); 
let flooredRes = Math.floor(addNum); 
let ceiledRes = Math.ceil(addNum); 

alert("Rounded: " + roundedRes);
alert("Rounded Down: " + flooredRes);
alert("Rounded Up: " + ceiledRes);
