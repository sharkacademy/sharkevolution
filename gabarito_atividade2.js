// ==============================
// DESAFIO 2: BIBLIOTECA DIGITAL
// ==============================

// INSTRUÇÕES:
// Não altere o nome da variável e a utilize em seu código.
// Não altere os nomes das funções e não altere seus parâmetros.

var catalog = [];
var orderedCatalog;

function addBooks() {
    console.log("Catálogo inicial:", catalog);
    catalog.push("Memórias Póstumas");
    catalog.push("O Poder dos Quietos");
    catalog.push("O Homem do Castelo Alto");
    catalog.push("Orçamento sem falhas");
    catalog.push("Essencialismo");
    console.log("Catálogo após adições:", catalog);
}

function removeFirstBook() {
    catalog.shift();
    console.log("Após remover o primeiro livro:", catalog);
}

function replaceBook() {
    catalog[2] = "Admirável Mundo Novo";
    console.log("Após substituir um livro:", catalog);
}

function splitBookTitle() {
    var splittedBook = catalog.at(-1);
    var words = splittedBook.split(" ");
    console.log("Título escolhido:", splittedBook);
    console.log("Título dividido em palavras:", words);
}

function addFirst() {
    catalog.unshift("Harry Potter e a Pedra Filosofal");
    console.log("Após adicionar um livro no começo:", catalog);
}

function countBooks() {
    var quantity = catalog.length;
    console.log("Número de livros no catálogo:", quantity);
}

function getThirdBook() {
    console.log("O terceiro livro do catálogo é:", catalog[2]);
}

function sortBookTitles() {
    orderedCatalog = catalog.slice().sort();
    console.log("Catálogo ordenado:", orderedCatalog);
    console.log("Catálogo original:", catalog);
}

// Execução das funções para demonstração: Não remova ou altere estas linhas
addBooks();
removeFirstBook();
replaceBook();
splitBookTitle();
addFirst();
countBooks();
getThirdBook();
sortBookTitles();
