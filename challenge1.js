// Adiciona livros ao catálogo
let catalogo = [];
catalogo.push("Essencialismo");
catalogo.push("Ted Talks");
catalogo.push("O Homem do Castelo Alto");
catalogo.push("Empatia Assertiva");
catalogo.push("Aprendizagem invertida");
alert("Depois de adicionar os livros: " + catalogo); 
// Essencialismo, Ted Talks, O Homem do Castelo Alto, Empatia Assertiva, Aprendizagem invertida


// Remove o primeiro livro do catálogo
catalogo.shift(); 
alert("Depois de remover o primeiro livro: " + catalogo);
// Ted Talks, O Homem do Castelo Alto, Empatia Assertiva, Aprendizagem invertida


// Procura um livro no catálogo
let searchResult = catalogo.includes("Ted Talks");
alert("O livro Ted Talks esta presente no catalogo? " + searchResult);
// true


// Substitui o título de um livro
alert("Antes de substituir o titulo do livro: " + catalogo);
let indiceLivro = catalogo.indexOf("O Homem do Castelo Alto");
catalogo[indiceLivro] = "O poder dos Quietos";
alert("Depois de substituir o titulo do livro: " + catalogo);
// Ted Talks, O poder dos Quietos, Empatia Assertiva, Aprendizagem invertida


// Lista os três primeiros livros do catálogo
let tresPrimeirosLivros = catalogo.slice(0, 3);
alert("Tres primeiros livros do catalogo: " + tresPrimeirosLivros);
// Ted Talks, O poder dos Quietos, Empatia Assertiva


// Divide o título de um livro em palavras
alert("Título original: " + catalogo[2])
let palavras = catalogo[2].split(" ");
alert("Titulo dividido em palavras: " + palavras);


// Adiciona um livro no começo do catálogo
alert("Catalogo antes de adicionar livro: " + catalogo);
catalogo.unshift("1789");
alert("Catalogo depois de adicionar livro: " + catalogo);
// 1789, Ted Talks, O poder dos Quietos, Empatia Assertiva, Aprendizagem invertida


// Conta o número de livros no catálogo
alert("Quantidade final de livros: " + catalogo.length);
// 5

// Exibe o título do primeiro livro do catálogo
alert("Titulo do primeiro livro: " + catalogo[0]);
// 1789
