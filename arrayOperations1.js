// Task 2.5
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange"); // "apple", "banana", "cherry", "orange"
fruits.shift(); // "banana", "cherry", "orange"
fruits.unshift("kiwi"); // "kiwi", "banana", "cherry", "orange"
let removedFruit = fruits.pop(); // "kiwi", "banana", "cherry"

alert("Final array: " + fruits); // "kiwi", "banana", "cherry"
alert("Removed Fruit: " + removedFruit); // "orange"

