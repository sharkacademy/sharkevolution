let grades = [85, 92, 88, 76, 95, 89, 73, 91, 55];

let hasHighScore = grades.some(score => score >= 90);
alert("Existem notas acima de 90: " + hasHighScore); // true

let firstHighScore = grades.find(score => score > 90);
alert("Primeira nota acima de 90: " + firstHighScore); // 92

let allPassing = grades.every(score => score >= 70);
alert("Todos as pessoas estudantes foram aprovadas: " + allPassing); // false

let firstLowScore = grades.find(score => score < 80);
alert("Primeira nota abaixo de 80: " + firstLowScore); // 76

let newGrades = grades.slice(2, 6);
alert("Novo array: " + newGrades); // 88, 76, 95, 89

let indexOf95OldArray = grades.findIndex(score => score == 95);
alert(indexOf95OldArray); // 4

let indexOf95NewArray = newGrades.findIndex(score => score == 95);
alert(indexOf95NewArray); // 2