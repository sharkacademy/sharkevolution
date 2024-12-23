let catalog = [
    {title: "1984", author: "George Orwell", genre: "Ficcao Cientifica", pubYear: 1949, pages: 328},
    {title: "O Senhor dos Aneis", author: "J.R.R. Tolkien", genre: "Fantasia", pubYear: 1954, pages: 1216},
    {title: "Duna", author: "Frank Herbert", genre: "Ficcao Cientifica", pubYear: 1965, pages: 688},
    {title: "Dom Casmurro", author: "Machado de Assis", genre: "Romance", pubYear: 1899, pages: 256},
    {title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", pubYear: 1813, pages: 432},
    {title: "Dom Quixote", author: "Miguel de Cervantes", genre: "Aventura", pubYear: 1605, pages: 863}
  ];

function checkBookExists(title) {
  for (let book of catalog) {
    if (book.title.toLowerCase() === title.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function addBook(title, author, genre, pubYear, pages) {
  if (checkBookExists(title)) {
    return 'O livro já existe no catálogo.'
  }
  catalog.push({ title, author, genre, pubYear, pages });
	return 'Livro adicionado com sucesso!';
}

function removeBook(title) {
  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].title.toLowerCase() === title.toLowerCase()) {
      catalog.splice(i, 1);
      return 'Livro removido com sucesso!';
    }
  }
  return 'Livro não encontrado.';
}

function findBook(title) {
  for (let book of catalog) {
    if (book.title.toLowerCase() === title.toLowerCase()) {
      return book;
    }
  }
	return 'Livro não encontrado.';
}

function findBooksByGenre(genre) {
  let result = [];
  for (let book of catalog) {
    if (book.genre.toLowerCase() === genre.toLowerCase()) {
      result.push(book);
    }
  }
  return result;
}

function findBooksByAuthor(author) {
  let result = [];
  for (let book of catalog) {
    if (book.author.toLowerCase() === author.toLowerCase()) {
      result.push(book);
    }
  }
  return result;
}

function menu() {
  let option;
  do {
    option = prompt('Menu:\n1. Verificar se um livro existe\n2. Adicionar um livro\n3. Remover um livro\n4. Procurar um livro\n5. Livros por gênero\n6. Livros por autor\n7. Sair');

    if (option === '1') {
      let title = prompt('Digite o titulo do livro:');
      let exists = checkBookExists(title);
      if (exists) {
        alert(`Livro ${title} encontrado!`);
      } else {
        alert('Livro não encontrado.');
      }
    }

    if (option === '2') {
      let title = prompt('Titulo:');
      let author = prompt('Autor:');
      let genre = prompt('Genero:');
      let pubYear = parseInt(prompt('Ano:'));
			let pages = parseInt(prompt('Paginas:'));
      alert(addBook(title, author, genre, pubYear, pages));
    }

    if (option === '3') {
      let title = prompt('Digite o título do livro a ser removido:');
      alert(removeBook(title));
    }

    if (option === '4') {
      let title = prompt('Digite o título do livro:');
      let book = findBook(title);
      if (typeof book === 'object') {
        alert('Titulo: ' + book.title + '\nAutor: ' + book.author + '\nGenero: ' + book.genre + '\nAno: ' + book.pubYear);
      } else {
        alert("Formato incorreto!");
      }
    }

    if (option === '5') {
      let genre = prompt('Digite o genero:');
      let books = findBooksByGenre(genre);
      if (books.length > 0) {
        let result = 'Livros:\n';
        for (let book of books) {
          result += book.title + '\n';
        }
        alert(result);
      } else {
        alert('Nenhum livro encontrado para esse gênero.');
      }
    }

    if (option === '6') {
      let author = prompt('Digite o autor:');
      let books = findBooksByAuthor(author);
      if (books.length > 0) {
        let result = 'Livros:\n';
        for (let book of books) {
          result += book.title + '\n';
        }
        alert(result);
      } else {
        alert('Nenhum livro encontrado para esse autor.');
      }
    }

  } while (option !== '7');
}

menu();