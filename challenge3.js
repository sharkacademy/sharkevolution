// Cria catálogo inicial vazio
const catalogoLivros = [];

// Adiciona 5 livros ao catálogo
catalogoLivros.push(
  {titulo: "1984", autor: "George Orwell", genero: "Ficcao Cientifica", anoPublicacao: 1949, paginas: 328},
  {titulo: "O Senhor dos Aneis", autor: "J.R.R. Tolkien", genero: "Fantasia", anoPublicacao: 1954, paginas: 1216},
  {titulo: "Duna", autor: "Frank Herbert", genero: "Ficcao Cientifica", anoPublicacao: 1965, paginas: 688},
  {titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", anoPublicacao: 1899, paginas: 256},
  {titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", anoPublicacao: 1813, paginas: 432},
  {titulo: "Dom Quixote", autor: "", genero: "Aventura", anoPublicacao: 1605, paginas: 863},
  );

// Objeto para armazenar a contagem de livros por gênero
const contagemGeneros = {};

// Loop para percorrer o catálogo e contar os gêneros
for (const livro of catalogoLivros) {
  const genero = livro.genero.toLowerCase();

  // Se o gênero já for uma chave no objeto, incrementa a quantidade
  if (contagemGeneros[genero]) {
    contagemGeneros[genero]++;
  } else {
    // Senão, cria uma nova chave para esse gênero
    contagemGeneros[genero] = 1;
  }
}

// Ordena os gêneros alfabeticamente
const generosOrdenados = Object.keys(contagemGeneros).sort();

for (const genero of generosOrdenados) { // ["aventura", ...]
  const quantidade = contagemGeneros[genero]; // {aventura:1, ...}
  
  // Exibe a quantidade de livros para o gênero
  alert(`${genero}: ${quantidade}`);
}
