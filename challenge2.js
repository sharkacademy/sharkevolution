// Cria catálogo inicial vazio
let catalogo = [];

// Adiciona 5 livros ao catálogo
catalogo.push(
  {titulo: "1984", autor: "George Orwell", genero: "Ficcao Cientifica", anoPublicacao: 1949, paginas: 328},
  {titulo: "O Senhor dos Aneis", autor: "J.R.R. Tolkien", genero: "Fantasia", anoPublicacao: 1954, paginas: 1216},
  {titulo: "Duna", autor: "Frank Herbert", genero: "Ficcao Cientifica", anoPublicacao: 1965, paginas: 688},
  {titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", anoPublicacao: 1899, paginas: 256},
  {titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", anoPublicacao: 1813, paginas: 432},
  {titulo: "Dom Quixote", autor: "", genero: "Aventura", anoPublicacao: 1605, paginas: 863},
  );

// Verifica se há livros de um determinado gênero
let possuiFiccaoCientifica = catalogo.some(livro => livro.genero == "Ficcao Cientifica");
alert("Existem livros de Ficcao Cientifica? " + possuiFiccaoCientifica);

// Confirma se todos os livros têm autores definidos
let todosTemAutor = catalogo.every(livro => livro.autor !== "");
alert("Todos os livros possuem autores? " + todosTemAutor);

// Encontra um livro pelo título
let livroEncontrado = catalogo.find(livro => livro.titulo == "Duna");
alert("Livro encontrado: " + livroEncontrado.titulo);

// Localiza a posição de um livro pelo título
let indiceLivro = catalogo.findIndex(livro => livro.titulo == "Dom Casmurro");
alert("Indice do livro 'Dom Casmurro': " + indiceLivro);

// Organiza os livros por ano de publicação
let catalogoOrdenado = [...catalogo].sort((a, b) => a.anoPublicacao - b.anoPublicacao);
let catalogoFormatado = catalogoOrdenado.map(livro => livro.titulo);
alert("Catalogo ordenado por ano de publicacao: " + catalogoFormatado);
