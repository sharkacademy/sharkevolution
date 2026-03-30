// var secretNumber = Math.floor(Math.random() * 100) + 1;
// var guess = "";

// while (guess != secretNumber) {
//     guess = Number(prompt("Tente adivinhar o número inteiro entre 1 e 100:"));
//     if (guess === secretNumber) {
//         alert("Parabéns! Acertou o número");
//     } else if (guess > secretNumber) {
//         alert("Seu palpite é MAIOR que o número secreto.");
//     } else {
//         alert("Seu palpite é MENOR que o número secreto.");
//     }
//     alert("O número secreto era: " + secretNumber);
// }


// var secretNumber = 7;
// var guess = "";

// while (guess != secretNumber) {
//     guess = Number(prompt("Tente adivinhar o número inteiro entre 1 e 100:"));
//     secretNumber = Math.floor(Math.random() * 100) + 1;
//     if (guess === secretNumber) {
//         alert("Parabéns! Acertou o número");
//     } else if (guess > secretNumber) {
//         alert("Seu palpite é MAIOR que o número secreto.");
//     } else {
//         alert("Seu palpite é MENOR que o número secreto.");
//     }
//     alert("O número secreto era: " + secretNumber);
// }


// let secretNumber = 7;
// let guess = "";

// while (guess != secretNumber) {
//     let guess = Number(prompt("Tente adivinhar o número inteiro entre 1 e 100:"));
//     let secretNumber = Math.floor(Math.random() * 100) + 1;
//     if (guess === secretNumber) {
//         alert("Parabéns! Acertou o número");
//     } else if (guess > secretNumber) {
//         alert("Seu palpite é MAIOR que o número secreto.");
//     } else {
//         alert("Seu palpite é MENOR que o número secreto.");
//     }
//     alert("O número secreto era: " + secretNumber);
// }

let secretNumber = 7;
let guess = "";

while (guess != secretNumber) {
    guess = Number(prompt("Tente adivinhar o número inteiro entre 1 e 100:"));
    secretNumberecretNumber = Math.floor(Math.random() * 100) + 1;
    if (guess === secretNumber) {
        alert("Parabéns! Acertou o número");
    } else if (guess > secretNumber) {
        alert("Seu palpite é MAIOR que o número secreto.");
    } else {
        alert("Seu palpite é MENOR que o número secreto.");
    }
    alert("O número secreto era: " + secretNumber);
}