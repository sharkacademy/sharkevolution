let product = {
  name: "Tênis Esportivo",
  price: 250,
  tags: ["Novo", "Moda", "Esporte"]
};

console.log(`Produto: ${product.name}`);
console.log(`Preço: R$ ${product.price}`);
product.tags.push("Promoção");

let lowerTags = product.tags.map(tag => tag.toLowerCase());
console.log("Tags do produto em minúsculas:");
console.log(lowerTags.join(", "));

let searchTag = "promoção";
let foundTag = product.tags.find(tag => tag.toLowerCase() == searchTag);
console.log("Tag encontrada:");
console.log(foundTag);

let finalPrice = product.price * Math.pow(0.9, product.tags.length);
console.log(`Preço final com descontos: R$ ${finalPrice.toFixed(2)}`);
