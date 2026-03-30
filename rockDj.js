let album = {
    title: "The Great Impersonator",
    artist: "Halsey",
    songs: [
        { name: "Ego", duration: 198 }, // song
        { name: "Panic Attack", duration: 223 }, // song
        { name: "Hometown", duration: 215 } // song
    ]
};

console.log(`Álbum: ${album.title}`);
console.log(`Artista: ${album.artist}`);

album.songs.push(
    { name: "Darwinism", duration: 200 }, // song
    { name: "Lonely is the Muse", duration: 230 } // song
);

let trackNames = album.songs.map(song => song.name.toUpperCase());
console.log("Músicas do álbum: " + trackNames.join(" * "));

let totalDuration = album.musicas.map(song => song = song.duracao).reduce((a, song) => a + song.duracao);
console.log(`Duração total do álbum: ${totalDuration} segundos`);

let searchTrack = "Ego";
let foundTrack = album.songs.find(song => song.name === searchTrack);
console.log("Música encontrada: ");
console.log(foundTrack);
