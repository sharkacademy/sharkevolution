let catalog = [];

catalog.push(
  {title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191},
  {title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216},
  {title: "Duna", author: "", genre: "Ficção Científica", publishingYear: 1965, pages: 688},
  {title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185},
  {title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432},
  {title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200},
  );

let sciFiBooks = catalog.some(book => book.genre.toLowerCase() == "ficção científica");
alert("Existem livros de Ficção Científica? " + sciFiBooks); // true

let authorExists = catalog.some(book => book.author == "");
alert("Algum dos livros está sem autor definido? " + authorExists); // true

let searchBook = prompt("Digite o nome do livro que deseja encontrar:").trim().toLowerCase();
let foundBook = catalog.find(book => book.title.toLowerCase() == searchBook);
alert(`O livro "${foundBook.title}" foi encontrado! Ele foi publicado em ${foundBook.publishingYear} e possui ${foundBook.pages} páginas. Seu autor é ${foundBook.author} e pertence ao gênero ${foundBook.genre}.`);

let searchBookIndex = prompt("Digite o nome do livro que deseja encontrar o índice:").trim().toLowerCase();
let bookIndex = catalog.findIndex(book => book.title.trim().toLowerCase() == searchBookIndex);
alert(`O índice do livro "${searchBookIndex}" é ${bookIndex}.`);

let sortedCatalog = catalog.slice().sort((a, b) => a.publishingYear - b.publishingYear);
let bookTitles = sortedCatalog.map(book => book.title);
alert("Catálogo ordenado por ano de publicação: " + bookTitles);
