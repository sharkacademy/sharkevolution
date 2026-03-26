let prices = [1200, 950, 1000, 1050, 980, 890, 1150];

let sortedPrices = prices.sort((a, b) => b - a);
console.log(sortedPrices);

let filteredPrices = prices.filter(price => price >= 1000);
console.log(filteredPrices);

let discountPrices = prices.map(price => price * 0.9);
console.log(discountPrices);

let totalRevenue = discountPrices.reduce((acc, price) => acc + price, 0);
console.log(totalRevenue);

let formattedPrices = discountPrices.map(price => console.log(`R$${price.toFixed(2)}`));
// console.log(formattedPrices);