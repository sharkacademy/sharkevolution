let prices = [1200, 950, 1000, 1050, 980, 890, 1150];

let filteredPrices = prices.filter(price => price >= 1000);
console.log(filteredPrices); // [1200, 1000, 1050, 1150]

let discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // 1080

let totalSum = discountedPrices.reduce((acc, price) => acc + price);
console.log(totalSum.toFixed(2));

let formattedPrices = discountedPrices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices);

let sortedPrices = prices.sort((a, b) => b - a);
console.log(sortedPrices); // [1200 ... 890]