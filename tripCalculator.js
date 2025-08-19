let distance = parseFloat(prompt("Digite a distância da viagem em km:")); // 20
let consumption = parseFloat(prompt("Digite o consumo do carro (km por litro):")); // 15
let fuelMoney = parseFloat(prompt("Digite o preço do combustível por litro:")); // 6

let necessaryFuel = distance / consumption;

let fullCost = necessaryFuel * fuelMoney;

alert("Distância da viagem: " + distance + " km");
alert("Consumo do carro: " + consumption + " km/l");
alert("Preço do combustível: R$ " + fuelMoney.toFixed(2));
alert("Litros necessários: " + necessaryFuel.toFixed(2) + " litros");
alert("Custo total da viagem: R$ " + fullCost.toFixed(2));
