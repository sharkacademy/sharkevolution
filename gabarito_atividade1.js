// ==============================
// DESAFIO 1: BIBLIOTECA DIGITAL
// ==============================

// INSTRUÇÕES:
// Não altere os nomes das variáveis e as utilize em seu código.
// Não altere os nomes das funções e não altere seus parâmetros.

var bookTitle = "";
var totalPages = 0;

function registerBook() {
    bookTitle = prompt("Digite o título do livro:").trim().toLowerCase();
    totalPages = parseInt(prompt("Digite o número total de páginas do livro:"));
    alert("Livro adicionado: " + bookTitle + " (" + totalPages + " páginas)");
}

function searchWordInTitle() {
    var wordSearch = prompt("Digite uma palavra para buscar no título:").trim().toLowerCase();
    var searchResult = bookTitle.includes(wordSearch);
    alert("A palavra foi encontrada? " + searchResult);
}

function replaceWordFromTitle() {
    var oldWord = prompt("Digite a palavra que deseja trocar:").trim().toLowerCase();
    var newWord = prompt("Digite a nova palavra:").trim().toLowerCase();
    bookTitle = bookTitle.replace(oldWord, newWord);
    alert("Novo título: " + bookTitle);
}

function showTitleStatistics() {
    alert("O título tem " + bookTitle.length + " caracter(es).");
    alert("O título tem " + bookTitle.split(" ").length + " palavra(s).");
}

function drawSurprisePage() {
    var surprisePage = Math.floor(Math.random() * totalPages) + 1;
    alert("Página surpresa do livro: " + surprisePage);
}

function calculateReadingGoal() {
    var days = parseInt(prompt("Em quantos dias você pretende terminar o livro?"));
    var pagesPerDay = (totalPages / days).toFixed(1);
    alert("Você precisa ler em média " + Math.ceil(pagesPerDay) + " página(s) por dia.");
}

// Execução das funções para demonstração: Não remova ou altere estas linhas
registerBook();
searchWordInTitle();
replaceWordFromTitle();
showTitleStatistics();
drawSurprisePage();
calculateReadingGoal();