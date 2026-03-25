let fruits = ["apple", "banana", "cherry"];
alert("Array inicial: " + fruits);

fruits.push("orange");
fruits.shift();
fruits.unshift("kiwi");
let removedFruit = fruits.pop();

alert("Array modificado: " + fruits); // ["kiwi, "banana", "cherry"]
alert("Fruta removida: " + removedFruit); // "orange"