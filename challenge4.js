let catalogo = [
    {titulo: "1984", autor: "George Orwell", genero: "Ficcao Cientifica", anoPublicacao: 1949, paginas: 328},
    {titulo: "O Senhor dos Aneis", autor: "J.R.R. Tolkien", genero: "Fantasia", anoPublicacao: 1954, paginas: 1216},
    {titulo: "Duna", autor: "Frank Herbert", genero: "Ficcao Cientifica", anoPublicacao: 1965, paginas: 688},
    {titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", anoPublicacao: 1899, paginas: 256},
    {titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", anoPublicacao: 1813, paginas: 432},
    {titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Aventura", anoPublicacao: 1605, paginas: 863}
  ];
  

function exibirTitulos() {
    const titulos = catalogo.map(livro => livro.titulo);
    alert("Livros disponíveis: " + titulos);
}


function adicionarLivro() {
    const novoTitulo = prompt("Digite o titulo do novo livro:");
    const novoAutor = prompt("Digite o autor do livro:");
    const novoGenero = prompt("Digite o genero do livro:");
    const novoAno = prompt("Digite o ano de publicacao do livro:");
    const novasPaginas = prompt("Digite o numero de paginas do livro:");
    
    catalogo.push({
      titulo: novoTitulo,
      autor: novoAutor,
      genero: novoGenero,
      anoPublicacao: parseInt(novoAno),
      paginas: parseInt(novasPaginas)
    });

    alert("Livro '" + novoTitulo + "' adicionado ao catalogo.");
    alert("Livros disponiveis: " + catalogo.map(livro => livro.titulo));
}


function editarAutor() {
    const tituloBusca = prompt("Digite o titulo do livro cujo autor deseja editar:");
    const livroEncontrado = catalogo.find(livro => livro.titulo.toLowerCase() === tituloBusca.toLowerCase());
  
    if (livroEncontrado) {
      const novoAutor = prompt("Digite o novo autor:");
      livroEncontrado.autor = novoAutor;
      alert("Autor do livro '" + livroEncontrado.titulo + "' atualizado para: " + novoAutor);
    } else {
      alert("Livro nao encontrado.");
    }
}


function procurarLivro() {
    const tituloBusca = prompt("Digite o titulo do livro que deseja procurar:");
    const livroEncontrado = catalogo.find(livro => livro.titulo.toLowerCase() === tituloBusca.toLowerCase());
  
    if (livroEncontrado) {
      alert(`Titulo: ${livroEncontrado.titulo}\nAutor: ${livroEncontrado.autor}\nGenero: ${livroEncontrado.genero}\nAno de Publicacao: ${livroEncontrado.anoPublicacao}\nPaginas: ${livroEncontrado.paginas}`);
    } else {
      alert("Livro nao encontrado.");
    }
}
  

function contarLivros() {
    alert("O catalogo possui " + catalogo.length + " livros.");
}


function atendimentoCliente() {
    let saida = false;
    
    while (saida == false) {

        const choice = prompt("Escolha uma opcao:\n1. Exibir todos os titulos\n2. Adicionar um novo livro\n3. Procurar um livro\n4. Contar quantos livros existem\n5. Editar o autor de um livro\n6. Sair");
    
        switch(choice) {
        case "1":
            exibirTitulos();
            break;
        case "2":
            adicionarLivro();
            break;
        case "3":
            procurarLivro();
            break;
        case "4":
            contarLivros();
            break;
        case "5":
            editarAutor();
            break;
        case "6":
            saida = true;
            break;
        default:
            alert("Opção inválida.");
        }
    }
}
  
atendimentoCliente();
  