let arr = [85, 92, 88, 76, 95, 89, 73, 91];

let hasHighScore = arr.some(score => score > 90);
alert("Existem notas acima de 90: " + hasHighScore); // true

let allPassing = arr.every(score => score >= 70);
alert("Todos as pessoas estudantes foram aprovadas: " + allPassing); // true

let firstLowScore = arr.find(score => score < 80);
alert("Primeira nota abaixo de 80: " + firstLowScore); // 76

let subset = arr.slice(2, 6);
alert("New array: " + subset); // [88, 76, 95, 89]

let indexOf95OldArray = arr.findIndex(score => score == 95); // 4
alert(indexOf95OldArray);

let indexOf95NewArray = subset.findIndex(score => score == 95); // 2
alert(indexOf95NewArray);
