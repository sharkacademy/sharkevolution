let numbers = [1, 2, 3, 4];

let searchNum1 = numbers.some(num => num > 2);
console.log(searchNum1);

let searchNum2 = numbers.every(num => num > 2);
console.log(searchNum2);

let findItem = numbers.find(num => num > 2);
console.log(findItem);

let findItemIndex = numbers.findIndex(num => num > 2);
console.log(findItemIndex);

let text = "A Mulher da Casa Abandonada";
let answer = text.search(/casa/i);
console.log(answer);