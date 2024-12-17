// Task 2.8
let prices = [1200, 950, 1000, 1050, 980, 890, 1150];

let sortedPrices = prices.sort((a, b) => b - a);
alert(prices);

let filteredPrices = prices.filter(price => price >= 1000);
alert(filteredPrices);

let discountedPrices = prices.map(price => price * 0.9);
alert(discountedPrices);

let totalSum = discountedPrices.reduce((price1, price2) => price1 + price2, 0);
alert(totalSum.toFixed(2));

let formattedPrices = discountedPrices.map(price => `$${price.toFixed(2)}`);
alert(formattedPrices);
