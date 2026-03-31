// ==============================
// DESAFIO 4: BIBLIOTECA DIGITAL
// ==============================

// INSTRUÇÕES:
// Não altere o nome da variável e a utilize em seu código.
// Não altere os nomes das funções e não altere seus parâmetros.

var catalog = [];

function addBooks() {
    catalog.push(
        { title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191, available: true },
        { title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216, available: true },
        { title: "Duna", author: "", genre: "Ficção Científica", publishingYear: 1965, pages: 688, available: false },
        { title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185, available: true },
        { title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432, available: false },
        { title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200, available: true },
    );
}

function rentBooks() {
    let loanBook = prompt("Digite o título do livro que deseja pedir emprestado:").trim().toLowerCase();
    let foundBook = catalog.find(book => book.title.toLowerCase() === loanBook); // Duna == emprestado

    if (foundBook == undefined) {
        alert("Livro não encontrado.");
    } else if (foundBook.available == true) {
        alert("O livro " + foundBook.title + " está disponível para empréstimo.");
    } else {
        alert("O livro " + foundBook.title + " já está emprestado.");
    }
}

function specialRecommendations() {
    // let recommendedBooks = catalog
    //     .filter(book => book.genre.toLowerCase() === "fantasia" || book.genre.toLowerCase() === "aventura")
    //     .map(l => l.title);
    let fantasyBooks = catalog.filter(book => book.genre.toLowerCase() === "fantasia");
    let adventureBooks = catalog.filter(book => book.genre.toLowerCase() === "aventura");
    let recommendedBooks = fantasyBooks.concat(adventureBooks).map(l => l.title); // A Droga da Obediência, O Senhor dos Aneis, The Promised Neverland

    if (recommendedBooks != []) {
        alert("Recomendações especiais:\n" + recommendedBooks);
    } else {
        alert("Não há livros recomendados.");
    }
}

function readingMarathon() {
    let minPages = parseInt(prompt("Digite o número mínimo de páginas para a Maratona de Leitura:"));
    let bookMaraton = catalog.filter(book => parseInt(book.pages) >= minPages).map(book => book.title); // 1000, O Senhor dos Anéis

    if (bookMaraton.length > 0) {
        alert("Livros para a Maratona de Leitura:\n" + bookMaraton);
    } else {
        alert("Nenhum livro com mais de " + minPages + " páginas encontrado.");
    }
}

function eternalClassics() {
    let classicBooks = catalog
        .filter(book => book.publishingYear < 2000) // filteredCatalog
        .sort((a, b) => a.publishingYear - b.publishingYear)
        .map(book => book.title);

    if (classicBooks.length > 0) {
        alert("Clássicos Eternos:\n" + classicBooks.join("\n"));
    } else {
        alert("Não há clássicos no catálogo.");
    }
}

// Execução das funções para demonstração: Não remova ou altere estas linhas
addBooks();
rentBooks();
specialRecommendations();
readingMarathon();
eternalClassics();