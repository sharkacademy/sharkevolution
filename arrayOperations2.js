let numbers = [15, 12, 8, 130, 44, 12, 7, 130];

let firstIndexOf12 = numbers.indexOf(12);
alert(`First index of 12: ${firstIndexOf12}`); // 1

let lastIndexOf130 = numbers.lastIndexOf(130);
alert(`Last index of 130: ${lastIndexOf130}`); // 7

let includes44 = numbers.includes(44);
alert(`Does the array include 44? ${includes44}`); // true

let firstGreaterThan50 = numbers.find(num => num > 50);
alert(`First number greater than 50: ${firstGreaterThan50}`); // 130

let firstIndexLessThan10 = numbers.findIndex(num => num < 10);
alert(`Index of the first number less than 10: ${firstIndexLessThan10}`); // 2 
