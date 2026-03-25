let numbers = [5, 12, 8, 130, 44, 12, 7, 130];

let firstIndexOf12 = numbers.indexOf(12);
alert(`Primeira aparição do 12: ${firstIndexOf12}`); // 1

let lastIndexOf130 = numbers.lastIndexOf(130);
alert(`Última aparição do 130: ${lastIndexOf130}`); // 7

let includes44 = numbers.includes(44);
alert(`O array inclui 44? ${includes44}`); // true

let firstGreaterThan50 = numbers.find(num => num > 50);
alert(`Primeiro número maior que 50: ${firstGreaterThan50}`); // 130

let firstIndexLessThan10 = numbers.findIndex(num => num < 10);
alert(`Posição do primeiro número menor que 10: ${firstIndexLessThan10}`); // 0