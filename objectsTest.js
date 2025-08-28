function Person(name, age) {
  this.name = name;
  this.age = age;
  this.intro = function() {
    return `Olá, meu nome é ${this.name} e tenho ${this.age} anos.`;
  };
}

const maria = new Person("Maria", 25);






















// function Book(titulo, autor, genero, ano, paginas) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.genero = genero;
//     this.anoPublicacao = ano;
//     this.paginas = paginas;
// }

// let book2 = new Book("O Senhor dos Aneis", "J.R.R. Tolkien", "Fantasia", 1954, 1216)

// console.log(book1.titulo);
// console.log(book2.titulo);




















// function Book(title, year, author) {
//     this.title = title.toUpperCase();
//     this.year = parseInt(year);
//     this.author = author.toUpperCase();
// }

// let book1 = new Book("aaaa", 2024, "Maria")
// for (let key in book1) {
//     console.log(`${key}: ${book1[key]}`);
// }





