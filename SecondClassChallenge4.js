let catalog = [];

catalog.push(
  {title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191, available: true},
  {title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216, available: true},
  {title: "Duna", author: "", genre: "Ficção Científica", publishingYear: 1965, pages: 688, available: false},
  {title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185, available: true},
  {title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432, available: false},
  {title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200, available: true},
  );

let loanBook = prompt("Digite o título do livro que deseja pedir emprestado:").trim().toLowerCase();
let foundBook = catalog.find(book => book.title.toLowerCase() === loanBook); // Duna == emprestado

if (foundBook == undefined) {
  alert("Livro não encontrado.");
} else if (foundBook.available == true) {
  alert("O livro " + foundBook.title + " está disponível para empréstimo.");
} else {
  alert("O livro " + foundBook.title + " já está emprestado.");
}

let fantasyBooks = catalog.filter(book => book.genre === "Fantasia");
let adventureBooks = catalog.filter(book => book.genre === "Aventura");
let recommendedBooks = fantasyBooks.concat(adventureBooks).map(l => l.title); // A Droga da Obediência, O Senhor dos Aneis, The Promised Neverland

if (recommendedBooks.length > 0) {
  alert("Recomendações especiais:\n" + recommendedBooks);
} else {
  alert("Não há livros de Fantasia ou Aventura no catálogo.");
}

let minPages = parseInt(prompt("Digite o número mínimo de páginas para a Maratona de Leitura:"));
let bookMaraton = catalog.filter(book => book.pages >= minPages).map(book => book.title); // 1000, O Senhor dos Anéis

if (bookMaraton.length > 0) {
  alert("Livros para a Maratona de Leitura:\n" + bookMaraton);
} else {
  alert("Nenhum livro com mais de " + minPages + " páginas encontrado.");
}

let classicBooks = catalog.filter(book => book.publishingYear < 2000).map(book => book.title);

if (classicBooks.length > 0) {
  alert("Clássicos Eternos:\n" + classicBooks);
} else {
  alert("Não há clássicos no catálogo."); 
}
