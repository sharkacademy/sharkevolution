// ==============================
// DESAFIO 6: BIBLIOTECA DIGITAL
// ==============================

// INSTRUÇÕES:
// Não altere o nome da variável e a utilize em seu código.
// Não altere os nomes das funções e não altere seus parâmetros.

let myCatalog = [];

function addBooks(catalog) {
    catalog.push(
        { title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191, available: true },
        { title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216, available: true },
        { title: "Duna", author: "Frank Herbert", genre: "Ficção Científica", publishingYear: 1965, pages: 688, available: false },
        { title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185, available: true },
        { title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432, available: false },
        { title: "Emma", author: "Jane Austen", genre: "Romance", publishingYear: 1815, pages: 544, available: true },
        { title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200, available: true },
    );
}

function bookDetails(catalog) {
    let bookTitle = prompt("Digite o título do livro para ver os detalhes:").toLowerCase();
    let bookFound = catalog.find(book => book.title.toLowerCase() === bookTitle);

    if (bookFound) {
        let bookInfo = "Detalhes do livro:\n";
        for (let key in bookFound) {
            bookInfo += key.toUpperCase() + ": " + bookFound[key] + "\n";
        }
        alert(bookInfo);
    } else {
        alert("Esse título não faz parte do catálogo.");
    }
}

function checkAvailability(catalog) {
    let loanBook = prompt("Digite o título do livro que deseja pedir emprestado:").trim().toLowerCase();
    let foundBook = catalog.find(book => book.title.toLowerCase() === loanBook);

    if (foundBook == undefined) {
        alert("Livro não encontrado.");
    } else if (foundBook.available === true) {
        alert("O livro " + foundBook.title + " está disponível para empréstimo.");
    } else {
        alert("O livro " + foundBook.title + " já está emprestado.");
    }
}

function authorSearch(catalog) {
    let authorSearch = prompt("Digite o nome do autor:").toLowerCase();
    let booksFound = [];

    for (let book of catalog) {
        if (book.author.toLowerCase() === authorSearch) {
            booksFound.push(book.title);
        }
    }

    if (booksFound.length > 0) {
        alert("Livros encontrados de " + authorSearch + ":\n" + booksFound.join("\n"));
    } else {
        alert("Nenhum livro encontrado para este autor.");
    }
}

function bookOfTheDay(catalog) {
    let availableBooks = catalog.filter(book => book.available);

    if (availableBooks.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableBooks.length);
        let chosenBook = availableBooks[randomIndex];
        alert("Livro do Dia:\n" + chosenBook.title + " - Autor: " + chosenBook.author);
    } else {
        alert("Nenhum livro disponível para o Livro do Dia.");
    }
}

function miniMarathon(catalog) {
    let maxPages = parseInt(prompt("Digite o número máximo de páginas:"));
    let preferredGenre = prompt("Digite o gênero desejado:").toLowerCase();

    let filteredBooks = catalog.filter(book => book.pages <= maxPages && book.genre.toLowerCase() === preferredGenre);
    let filteredBooksTitles = filteredBooks.map(b => b.title);

    if (filteredBooks.length > 0) {
        alert("Livros que atendem aos critérios:\n" + filteredBooksTitles);
    } else {
        alert("Nenhum livro atende aos critérios informados.");
    }
}

function lastBooks(catalog) {
    let lastThree = catalog.length - 3 < 0 ? 0 : catalog.length - 3;
    let message1 = "Estante da Inspiração - Últimos 3 livros:\n";

    for (let i = lastThree; i < catalog.length; i++) {
        message1 += "- " + catalog[i].title + "\n";
    }

    alert(message1);
}

function eternalClassics(catalog) {
    let classics = catalog.filter(book => book.publishingYear < 2000);
    let classicsTitles = classics.map(b => b.title);
    if (classics.length > 0) {
        alert("Clássicos Eternos:\n" + classicsTitles.join("\n"));
    } else {
        alert("Nenhum clássico encontrado no catálogo.");
    }
}

function mainMenu(catalog) {
    let options = "";
    while (options !== "8") {
        options = prompt(
            "=== Biblioteca Digital ===\n" +
            "Escolha uma opção:\n" +
            "1 - Raio-X Literário\n" +
            "2 - Empréstimo Relâmpago\n" +
            "3 - Caça ao Autor\n" +
            "4 - Livro do Dia\n" +
            "5 - Mini-Maratoninha Avançada\n" +
            "6 - Estante da Inspiração\n" +
            "7 - Clássicos Eternos\n" +
            "8 - Sair\n");

        switch (options) {
            case "1":
                bookDetails(catalog);
                break;
            case "2":
                checkAvailability(catalog);
                break;
            case "3":
                authorSearch(catalog);
                break;
            case "4":
                bookOfTheDay(catalog);
                break;
            case "5":
                miniMarathon(catalog);
                break;
            case "6":
                lastBooks(catalog);
                break;
            case "7":
                eternalClassics(catalog);
                break;
            case "8":
                alert("Sistema encerrado. Obrigado por ser o guardião da Biblioteca Digital!");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    }
}

// addBooks(myCatalog);
// mainMenu(myCatalog);