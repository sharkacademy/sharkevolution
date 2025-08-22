let album = {
  title: "The Great Impersonator",
  artist: "Halsey",
  tracks: [
    { name: "Ego", duration: 198 },
    { name: "Panic Attack", duration: 223 },
    { name: "Hometown", duration: 215 }
  ]
};

console.log(`Álbum: ${album.title}`);
console.log(`Artista: ${album.artist}`);

album.tracks.push(
  { name: "Darwinism", duration: 200 },
  { name: "Lonely is the Muse", duration: 230 }
);

let trackNames = album.tracks.map(track => track.name.toUpperCase());
console.log("Músicas do álbum:");
console.log(trackNames.join(", "));

let totalDuration = album.tracks.reduce((acc, track) => acc + track.duration, 0);
console.log(`Duração total do álbum: ${totalDuration} segundos`);

let searchTrack = "Ego";
let foundTrack = album.tracks.find(track => track.name == searchTrack);
console.log("Música encontrada:");
console.log(foundTrack);  
