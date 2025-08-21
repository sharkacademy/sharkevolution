var catalog = [];
catalog.push("Memórias Póstumas");
catalog.push("O Poder dos Quietos");
catalog.push("O Homem do Castelo Alto");
catalog.push("Orçamento sem falhas");
catalog.push("Essencialismo");
console.log("Catálogo inicial:", catalog);











catalog.shift();
console.log("Após remover o primeiro livro:", catalog);













var searchBook = "Essencialismo";
var exists = catalog.includes(searchBook);
console.log("O livro '" + searchBook + "' está no catálogo?", exists);











var pos = catalog.indexOf("O Poder dos Quietos");
catalog[pos] = "Admirável Mundo Novo";
console.log("Após substituir um livro:", catalog);


















var splittedBook = catalog[1]; 
var words = splittedBook.split(" ");
console.log("Título escolhido:", splittedBook);
console.log("Título dividido em palavras:", words);














catalog.unshift("Harry Potter e a Pedra Filosofal");
console.log("Após adicionar um livro no começo:", catalog);
















var quantity = catalog.length;
console.log("Número de livros no catálogo:", quantity);
console.log("O terceiro livro do catálogo é:", catalog[2]);
