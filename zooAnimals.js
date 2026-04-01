let animals = [
    {
        name: "Sorvetinho",
        especies: "Felino",
        age: 6,
        habitat: "Sala de Estar"
    },
    {
        name: "Garoto",
        especies: "Felino",
        age: undefined,
        habitat: "Quarto"
    },
    {
        name: "Cinza",
        especies: "Felino",
        
        age: 4,
        habitat: "Cozinha"
    }
];

for (let animal of animals) {
    for (let key in animal) {
        console.log(key + ": " + animal[key]);
    }
    console.log("⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹");
}