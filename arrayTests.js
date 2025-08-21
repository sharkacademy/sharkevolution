// var catalog = [];
// catalog.push("Memórias Póstumas");
// catalog.push("O Poder dos Quietos");
// catalog.push("O Homem do Castelo Alto");
// catalog.push("Orçamento sem falhas");
// catalog.push("Essencialismo");
// console.log("Catálogo inicial:", catalog);

// let searchBook = catalog.some(book => book == prompt("Qual livro deseja pesquisar: "));
// console.log(searchBook);

// let arr = [5, 9, 5, 6, 7]; 
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);
// let biggerThan5 = arr.filter(num => num > 5);
// console.log(biggerThan5); // [9, 6, 7]

// let newArr = arr.map(num => num - 2);
// console.log(newArr); // [3, 7, 3, 4, 5]
// console.log(arr);



let arr = [5, 9, 5, 6, 7]; 
let reducedArr = arr.reduce((acc, num, indexNum) => acc + num / indexNum);
console.log(reducedArr);

// Primeira iteração:
// acc = 5, num = 9, indexNum = 1
// acc + num / indexNum = 5 + 9/1 = 14

// Segunda iteração:
// acc = 14, num = 5, indexNum = 2
// 14 + 5/2 = 16.5

// Terceira iteração:
// acc = 16.5, num = 6, indexNum = 3
// 16.5 + 6/3 = 18.5

// Quarta iteração:
// acc = 18.5, num = 7, indexNum = 4
// 18.5 + 7/4 = 20.25