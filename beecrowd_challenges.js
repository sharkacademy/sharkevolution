// 1000
console.log("Hello World!")

// 1001
var result = parseInt(lines[0]) + parseInt(lines[1]);
console.log("X = " + result)

// 1002
var result = 3.14159 * parseFloat(lines[0]) * parseFloat(lines[0]);
console.log("A=" + result.toFixed(4));

// 1013
// DICA: Atenção ao formato de entrada dos valores inteiros! Todos os três valores estão salvos em lines[0]
var numbers = lines[0].split(" ");

var num1 = parseInt(numbers[0]);
var num2 = parseInt(numbers[1]);
var num3 = parseInt(numbers[2]);

var abs1 = Math.abs(num1 - num2);
var result1 = (num1 + num2 + abs1) / 2;

var abs2 = Math.abs(result1 - num3);
var result2 = (result1 + num3 + abs2) / 2;

console.log(result2 + " eh o maior");

// 1015
var numbers1 = lines[0].split(" "); // x1 y1
var numbers2 = lines[1].split(" "); // x2 y2

var firtssum = Math.pow(parseFloat(numbers2[0]) - parseFloat(numbers1[0]), 2);
var secondsum = Math.pow(parseFloat(numbers2[1]) - parseFloat(numbers1[1]), 2);
var thirdsum = firtssum + secondsum;

var result = Math.sqrt(thirdsum);
console.log(result.toFixed(4));

// 1017
var time = parseInt(lines[0]);
var speed = parseInt(lines[1]);

var result = time * speed / 12;
console.log(result.toFixed(3));

// 1036
// DICA: Pesquisar o que causa uma raiz ser inválida para construção da condicional
var numbers = lines[0].split(" ");

var a = parseFloat(numbers[0]);
var b = parseFloat(numbers[1]);
var c = parseFloat(numbers[2]);

var delta = (Math.pow(b, 2)) - (4 * a * c);

if (a !== 0 && delta > -1) {
    var cof1 = (- b + Math.sqrt(delta)) / (2 * a);
    var cof2 = (- b - Math.sqrt(delta)) / (2 * a);
    console.log("R1 = " + cof1.toFixed(5));
    console.log("R2 = " + cof2.toFixed(5));
} else {
    console.log("Impossivel calcular");
}

// 1038
// DICA: Pense em qual estrutura de dados melhor armazena os dados dos produtos
var inputs = lines[0].split(" ");
var products = { "1": 4.00, "2": 4.50, "3": 5.00, "4": 2.00, "5": 1.50 }
var product = inputs[0];
var quantity = parseInt(inputs[1]);
var result = products[product] * quantity;

console.log("Total: R$ " + result.toFixed(2))

// 1134
var count1 = 0;
var count2 = 0;
var count3 = 0;

for (var i of lines) {
    if (parseInt(i) === 1) {
        count1++;
    } else if (parseInt(i) === 2) {
        count2++;
    } else if (parseInt(i) === 3) {
        count3++;
    }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + count1);
console.log("Gasolina: " + count2);
console.log("Diesel: " + count3);

// 1180
// DICA: É necessário restringir a quantidade de números a serem analisados
var N = parseInt(lines[0]);
var lista = lines[1].split(" ");

var menor = lista[0];
var pos = 0;

for (var i = 1; i < N; i++) {
    if (lista[i] < menor) {
        menor = parseInt(lista[i]);
        pos = i;
    }
}

console.log("Menor valor: " + menor);
console.log("Posicao: " + pos);

// 2006
var correct = lines[0];
var answers = lines[1].split(" ");
var counter = 0;

for (var i of answers) {
    if (i == correct) {
        counter++;
    }
}

console.log(counter);

// 2146
for (var i of lines) {
    if (!isNaN(parseInt(i))) {
        console.log(parseInt(i) - 1);
    }
}

// 2160
if (lines[0].length > 80) {
    console.log("NO");
} else {
    console.log("YES");
}

// 2234
lines = lines[0].split(" ");
var num1 = parseInt(lines[0]);
var num2 = parseInt(lines[1]);

if (!isNaN(num1) || !isNaN(num2)) {
    console.log((num1 / num2).toFixed(2));
}

