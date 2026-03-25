var movies = ["Mulan", "Orgulho e Preconceito", "Tarzan", "Anastacia", "De Repente 30"];
alert(movies);

var movieName = prompt("Digite o nome de um filme que deseja buscar: ").trim();
var hasMovie = movies.includes(movieName);
alert("O filme está na lista? " + hasMovie);

var index = movies.indexOf(movieName);
alert("O filme " + movieName + " está na posição " + index + " da lista.\nCaso ele esteja na posição '-1' significa que ele não está na lista.");

// var newMovie1 = prompt("Digite um filme para adicionar à lista:").trim();
// movies.push(newMovie1);

var newMovies = prompt("Digite filmes que você gostaria de adicionar à lista separados por vírgula:");
var moviesArray = newMovies.split(", ");
movies = movies.concat(moviesArray);
alert(movies);

var firstMovies = movies.slice(0, 3);
alert("Os primeiros filmes da lista são: " + firstMovies);
