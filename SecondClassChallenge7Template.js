let catalog = [];

catalog.push(
  {title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191, available: true},
  {title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216, available: true},
  {title: "Duna", author: "Frank Herbert", genre: "Ficção Científica", publishingYear: 1965, pages: 688, available: false},
  {title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185, available: true},
  {title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432, available: false},
  {title: "Emma", author: "Jane Austen", genre: "Romance", publishingYear: 1815, pages: 544, available: true},
  {title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200, available: true},
  );

function bookDetails(catalog) {
}

function checkAvailability(catalog) {
}

function authorSearch(catalog) {
}

function bookOfTheDay(catalog) {
}

function miniMarathon(catalog) {
}

function lastBooks(catalog) {
}


function mainMenu(catalog) {
  let options = "";
  while (options !== "7") {
    options = prompt(
      "=== Biblioteca Digital ===\n" +
      "Escolha uma opção:\n" +
      "1 - Raio-X Literário\n" +
      "2 - Empréstimo Relâmpago\n" +
      "3 - Caça ao Autor\n" +
      "4 - Livro do Dia\n" +
      "5 - Mini-Maratoninha Avançada\n" +
      "6 - Estante da Inspiração\n" +
      "7 - Sair\n"
    );

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
        alert("Até logo!");
        break;
      default:
        alert("Opção inválida! Tente novamente.");
    }
  }
}

mainMenu(catalog);
