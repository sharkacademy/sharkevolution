let animal = {
  nome: "Sorvetinho",
  especie: "Leão",
  idade: 5,
  habitat: "Cama Queen Size"
};

for (let key in animal) {
  console.log(key + ": " + animal[key]);
}
