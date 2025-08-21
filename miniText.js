let text = prompt("Digite uma frase ou parágrafo:");
let numCharacteres = text.length;
let numWords = text.trim().split(" ").length;

alert("O texto digitado tem " + numCharacteres + " caracteres.");
alert("O texto digitado tem " + numWords + " palavras.");
