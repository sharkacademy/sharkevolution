// let book1 = {titulo: "1984", autor: "George Orwell", genero: "Ficcao Cientifica", anoPublicacao: 1949, paginas: 328}

// function Book(titulo, autor, genero, ano, paginas) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.genero = genero;
//     this.anoPublicacao = ano;
//     this.paginas = paginas;
// }

// let book2 = new Book("O Senhor dos Aneis", "J.R.R. Tolkien", "Fantasia", 1954, 1216)

// alert(book1.titulo);
// alert(book2.titulo);




















// Função molde
function Book(title, year, author) {
    this.title = title.toUpperCase();
    this.year = parseInt(year);
    this.author = author.toUpperCase();
}

let book1 = new Book("aaaa", 2024, "Maria")
for (let key in book1) {
    alert(`${key}: ${book1[key]}`);
}


// Classe
// class Book {
//     constructor(title, year, author) {
//         this.title = title.toUpperCase();
//         this.year = parseInt(year);
//         this.author = author.toUpperCase();
//     }
// }

// let book1 = new Book("aaaa", 2024, "Maria");
// for (let key in book1) {
//     alert(`${key}: ${book1[key]}`);
// }


