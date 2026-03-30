let product = {
    name: "Tênis Esportivo",
    price: 250,
    tags: ["Novo", "Moda", "Esporte"]
};

console.log(`Produto: ${product.name}`);
console.log(`Preço: R$ ${product.price}`);
product.tags.push("Promoção", "Oferta");

let lowerTags = product.tags.map(tag => tag.toLowerCase());
console.log("Tags do produto em minúsculas: " + lowerTags.join(", "));

let searchTag = "promoção";
let foundTag = product.tags.find(tag => tag.toLowerCase() === searchTag);
console.log("Tag encontrada: " + foundTag);

let finalPrice = product.price - (product.price * (product.tags.length * 0.1));
console.log(`Preço final com descontos: R$ ${finalPrice.toFixed(2)}`);