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

let option = 0;

while (option !== 5) {
  option = parseInt(prompt(
    "Escolha uma missão:\n" +
    "1 - Missão Estante da Inspiração\n" +
    "2 - Missão Caça ao Autor\n" +
    "3 - Missão Raio-X Literário\n" +
    "4 - Missão Contagem de Gêneros\n" +
    "5 - Sair"
  ));

  if (option === 1) {
    let lastThree = catalog.length - 3 < 0 ? 0 : catalog.length - 3; 
    let message1 = "Estante da Inspiração - Últimos 3 livros:\n";

    for (let i = lastThree; i < catalog.length; i++) { 
      message1 += "- " + catalog[i].title + "\n"; 

    alert(message1);
    
  }
 } else if (option === 2) {
    let authorSearch = prompt("Digite o nome do autor:").toLowerCase();
    let booksFound = [];

    for (let book of catalog) {
      if (book.author.toLowerCase() === authorSearch) {
        booksFound.push(book.title);
      }
    }

    if (booksFound.length > 0) {
      alert("Livros encontrados de " + authorSearch + ":\n" + booksFound);
    } else {
      alert("Nenhum livro encontrado para este autor.");
    }

  } else if (option === 3) {
    let bookTitle = prompt("Digite o título do livro para ver os detalhes:").toLowerCase();
    let bookFound = catalog.find(book => book.title.toLowerCase() === bookTitle);
    
    if (bookFound) {
      let bookInfo = "Detalhes do livro:\n";
      for (let key in bookFound) {
        bookInfo += key.toUpperCase() + ": " + bookFound[key] + "\n"; 
      }
      alert(bookInfo);
    } else {
      alert("Livro não encontrado no catálogo.");
    }
  } else if (option === 4) {
    let bookGenres = {}; 

    for (let book of catalog) { 
      if (bookGenres[book.genre]) {
        bookGenres[book.genre]++;
      } else {
        bookGenres[book.genre] = 1;
      }
    }

    let message2 = "Contagem de livros por gênero:\n";
    for (let genre in bookGenres) {
      message2 += genre + ": " + bookGenres[genre] + "\n";
    }

    alert(message2);
  } else if (option === 5) {
    alert("Sistema encerrado. Obrigado por ser o guardião da Biblioteca Digital!");

  } else {
    alert("Opção inválida, tente novamente.");
  }
} 