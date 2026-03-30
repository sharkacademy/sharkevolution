// ==============================
// DESAFIO 3: BIBLIOTECA DIGITAL
// ==============================

// INSTRUÇÕES:
// Não altere o nome da variável e a utilize em seu código.
// Não altere os nomes das funções e não altere seus parâmetros.

var catalog = [];
var sortedCatalog = [];

function addBooks() {
    catalog.push(
        { title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191 },
        { title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216 },
        { title: "Duna", author: "", genre: "Ficção Científica", publishingYear: 1965, pages: 688 },
        { title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185 },
        { title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432 },
        { title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200 },
    );
}

function hasGenreBooks() {
    let searchGenre = prompt("Digite o gênero que deseja verificar: ").trim().toLowerCase();
    let foundBooks = catalog.filter(book => book.genre.toLowerCase() == searchGenre).length;
    alert(`Número de livros encontrados do gênero ${searchGenre}: ${foundBooks}`);
}

function findBookByTitle() {
    alert(`Catálogo de livros: ${catalog.map(book => book.title)}`);
    let searchBook = prompt("Digite o nome do livro que deseja informações: ").trim().toLowerCase();
    let foundBook = catalog.find(book => book.title.toLowerCase() == searchBook);
    alert(`O livro "${foundBook}" foi encontrado! Ele foi publicado em ${foundBook.publishingYear} e possui ${foundBook.pages} páginas. Seu autor é ${foundBook.author} e pertence ao gênero ${foundBook.genre}.`);
}

function findBookIndexByTitle() {
    let searchBookIndex = prompt("Digite o nome do livro que deseja encontrar o índice: ").trim().toLowerCase();
    let bookIndex = catalog.findIndex(book => book.title.toLowerCase() == searchBookIndex);
    alert(`O índice do livro "${searchBookIndex}" é ${bookIndex}.`);
}

function getCatalogSortedByYear() {
    sortedCatalog = catalog.slice().sort((a, b) => a.publishingYear - b.publishingYear);
    let bookTitles = sortedCatalog.map(book => book.title);
    alert(`Catálogo ordenado por ano de publicação: ${bookTitles}`);
}

// Execução das funções para demonstração: Não remova ou altere estas linhas
addBooks();
hasGenreBooks();
findBookByTitle();
findBookIndexByTitle();
getCatalogSortedByYear();