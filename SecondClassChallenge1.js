var title = prompt("Digite o título do livro:").trim();
var page = parseInt(prompt("Digite o número total de páginas do livro:"));

alert("Livro adicionado: " + title + " (" + page + " páginas)");

var wordSearch = prompt("Digite uma palavra para buscar no título:").trim();
var searchResult = title.includes(wordSearch);
alert("A palavra foi encontrada? " + searchResult);

var oldWord = prompt("Digite a palavra que deseja trocar:").trim();
var newWord = prompt("Digite a nova palavra:").trim();

title = title.replace(oldWord, newWord);
alert("Novo título: " + title);

alert("O título tem " + title.length + " caracter(es).");
alert("O título tem " + title.split(" ").length + " palavra(s).");

var surprisePage = Math.floor(Math.random() * page) + 1;
alert("Página surpresa do livro: " + surprisePage);

var days = parseInt(prompt("Em quantos dias você pretende terminar o livro?"));
var pagesPerDay = (page / days).toFixed(1);
alert("Você precisa ler em média " + pagesPerDay + " página(s) por dia.");
