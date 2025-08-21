var movies = ["Hulk", "Shrek", "Mulan", "Interestelar", "Alien"];










var searchMovie = prompt("Digite o nome de um filme para procurar na lista:");
alert("O filme está na lista? " + movies.includes(searchMovie));
alert("Posição do filme na lista: " + movies.indexOf(searchMovie));











var newMovies = prompt("Digite outros filmes separados por vírgula:");
var newList = newMovies.split(",");
var finalList = movies.concat(newList);
alert("Lista final de filmes: " + finalList.join(", "));












var threeFirst = finalList.slice(0, 3);
alert("Os três primeiros filmes da lista são: " + threeFirst.join(", "));
