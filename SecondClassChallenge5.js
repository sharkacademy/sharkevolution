let catalog = [];

catalog.push(
  {title: "A Droga da Obediência", author: "Pedro Bandeira", genre: "Aventura", publishingYear: 1984, pages: 191, available: true},
  {title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", publishingYear: 1954, pages: 1216, available: true},
  {title: "Duna", author: "", genre: "Ficção Científica", publishingYear: 1965, pages: 688, available: false},
  {title: "Skip e Loafer", author: "Misaki Takamatsu", genre: "Romance", publishingYear: 2025, pages: 185, available: true},
  {title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", publishingYear: 1813, pages: 432, available: false},
  {title: "The Promised Neverland", author: "Kaiu Shirai", genre: "Aventura", publishingYear: 2018, pages: 200, available: true},
  );

let option = 0;

while (option !== 3) {
  option = parseInt(prompt(
    "Escolha uma missão:\n" +
    "1 - Livro do Dia\n" +
    "2 - Mini-Maratoninha Avançada\n" +
    "3 - Sair"
  ));

  if (option === 1) { // 0,0 * 4 = 0,0 até 0,9 * 4 = 3,6 -> 0 - 3
    let availableBooks = catalog.filter(book => book.available); // [1, 2, 3, 4]
    
    if (availableBooks.length > 0) {
      let randomIndex = Math.floor(Math.random() * availableBooks.length);
      let chosenBook = availableBooks[randomIndex];
      alert("Livro do Dia:\n" + chosenBook.title + " - Autor: " + chosenBook.author);
    } else {
      alert("Nenhum livro disponível para o Livro do Dia.");
    }

  } else if (option === 2) {
    let maxPages = parseInt(prompt("Digite o número máximo de páginas:")); // 300
    let preferredGenre = prompt("Digite o gênero desejado:").toLowerCase(); // Aventura

    let filteredBooks = catalog.filter(book => book.pages <= maxPages && book.genre.toLowerCase() === preferredGenre);
    let filteredBooksTitles = filteredBooks.map(b => b.title);

    if (filteredBooks.length > 0) {
      alert("Livros que atendem aos critérios:\n" + filteredBooksTitles);
    } else {
      alert("Nenhum livro atende aos critérios informados.");
    }

  } else if (option === 3) {
    alert("Sistema encerrado. Obrigado por ser o guardião da Biblioteca Digital!");
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}
