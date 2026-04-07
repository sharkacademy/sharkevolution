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

// 1021
export function problem(lines) {
    const valor = lines[0]
    const especiesDisponiveis = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01]

    const quantidadeEspecie = (valor, especie) => Math.trunc(valor / especie)
    const sobraEspecie = (valor, especie) => (valor % especie).toFixed(2)

    function quantidadesEspecies(valor, especies) {
        const listaEspecies = especies.map(especie => {
            const quantidade = quantidadeEspecie(valor, especie)
            valor = sobraEspecie(valor, especie)
            return {
                especie: especie,
                quantidade: quantidade
            }
        })

        return listaEspecies
    }

    function exibirResultado() {
        const especies = quantidadesEspecies(valor, especiesDisponiveis)
        const notas = especies.slice(0, 6)
        const moedas = especies.slice(6, 12)

        console.log('NOTAS:')
        notas.forEach(nota => console.log(`${nota.quantidade} nota(s) de R$ ${nota.especie.toFixed(2)}`))

        console.log('MOEDAS:')
        moedas.forEach(moeda => console.log(`${moeda.quantidade} moeda(s) de R$ ${moeda.especie.toFixed(2)}`))
    }

    exibirResultado()
}

//1041
export function problem(lines) {

    function determinarQuadrante(x, y) {
        if (x == 0 && y == 0) {
            return 'Origem'
        } else if (x == 0) {
            return 'Eixo Y'
        } else if (y == 0) {
            return 'Eixo X'
        } else if (x > 0 && y > 0) {
            return 'Q1'
        } else if (x < 0 && y > 0) {
            return 'Q2'
        } else if (x < 0 && y < 0) {
            return 'Q3'
        } else {
            return 'Q4'
        }
    }

    const [x, y] = lines[0].split(' ').map(Number)
    const quadrante = determinarQuadrante(x, y)
    console.log(quadrante)
}

// 1047
export function problem(lines) {
    const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(' ').map(Number)

    const inicio = horaInicial * 60 + minutoInicial
    const fim = horaFinal * 60 + minutoFinal

    let duracaoTotalMinutos

    if (fim > inicio) {
        duracaoTotalMinutos = fim - inicio
    } else {
        duracaoTotalMinutos = (24 * 60 - inicio) + fim
    }

    const duracaoHoras = Math.floor(duracaoTotalMinutos / 60)
    const duracaoMinutos = duracaoTotalMinutos % 60

    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)
}

// 1160
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift());
for (let i = 0; i < T; ++i) {
    let [PA, PB, G1, G2] = lines.shift().trim().split(' ');
    [PA, PB] = [parseInt(PA), parseInt(PB)];
    [G1, G2] = [parseFloat(G1) / 100, parseFloat(G2) / 100];

    let anos;
    for (anos = 1; PA <= PB && anos < 101; ++anos) {
        PA += Math.floor(PA * G1);
        PB += Math.floor(PB * G2);
    }

    if (PA <= PB) {
        console.log('Mais de 1 seculo.');
    } else {
        console.log(`${anos - 1} anos.`);
    }
}

// 2344
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const conceito = (nota) => {
    if (nota > 85) {
        return 'A';
    }
    if (nota > 60) {
        return 'B';
    }
    if (nota > 35) {
        return 'C';
    }
    if (nota > 0) {
        return 'D';
    }
    return 'E';
};

let N = parseInt(lines.shift());
console.log(conceito(N));

// 2670
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A1 = parseInt(lines.shift());
let A2 = parseInt(lines.shift());
let A3 = parseInt(lines.shift());

console.log(2 * Math.min(A2 + 2 * A3, A1 + A3, 2 * A1 + A2));

// 2709
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const Crivo = (C) => {
    for (let i = 0; i < 10001; ++i) {
        C[i] = i % 2;
    }
    C[1] = 0;
    C[2] = 1;

    for (let i = 3; i < 10001; i += 2) {
        if (C[i]) {
            for (let j = 3 * i; j < 10001; j += 2 * i) {
                C[j] = 0;
            }
        }
    }
};

C = [];
Crivo(C);

while (lines.length) {
    let M = parseInt(lines.shift());

    let V = [];
    for (let i = 0; i < M; ++i) {
        V[i] = parseInt(lines.shift());
    }

    let N = parseInt(lines.shift());

    let soma = 0;
    for (let i = M - 1; i > -1; i -= N) {
        soma += V[i];
    }

    if (C[soma])
        console.log("You’re a coastal aircraft, Robbie, a large silver aircraft.");
    else
        console.log("Bad boy! I’ll hit you.");
}

// 2712
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valido = (placa) => placa.match(/^([A-Z]{3})-([0-9]{4})$/g) !== null;
const diaDaSemana = (placa) => {
    switch (placa[7]) {
        case '1':
        case '2': return 'MONDAY';
        case '3':
        case '4': return 'TUESDAY';
        case '5':
        case '6': return 'WEDNESDAY';
        case '7':
        case '8': return 'THURSDAY';
        case '9':
        case '0': return 'FRIDAY';
    }
};

let N = parseInt(lines.shift().trim());
for (let i = 0; i < N; ++i) {
    let S = lines.shift().trim();

    if (!valido(S)) {
        console.log('FAILURE');
    } else {
        console.log(diaDaSemana(S));
    }
}

// 2764
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let data = lines.shift().trim().split('/');

console.log(`${data[1]}/${data[0]}/${data[2]}`);
console.log(`${data[2]}/${data[1]}/${data[0]}`);
console.log(`${data[0]}-${data[1]}-${data[2]}`);

// 2780
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let D = parseInt(lines.shift());

if (D <= 800) {
    console.log(1);
}
else if (D <= 1400) {
    console.log(2);
}
else {
    console.log(3);
}

// 2861
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let C = parseInt(lines.shift());

for (let k = 0; k < C; ++k) {
    let frase = lines.shift();
    console.log('gzuz');
}

// 2936
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const porcoes = [300, 1500, 600, 1000, 150];

let resposta = 225;
for (let i = 0; i < 5; ++i) {
    let quantidade = parseInt(lines.shift().trim());
    resposta += quantidade * porcoes[i];
}

console.log(resposta);