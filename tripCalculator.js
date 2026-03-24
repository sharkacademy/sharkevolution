var distance = parseFloat(prompt("Digite a distância da viagem em km:"));
var consumption = parseFloat(prompt("Digite o consumo do carro (km por litro):"));
var fuelMoney = parseFloat(prompt("Digite o preço do combustível por litro:"));

var necessaryFuel = distance / consumption;
var fullCost = necessaryFuel * fuelMoney;

alert("Litros necessários: " + necessaryFuel.toFixed(2) + " litros");
alert("Custo total da viagem: R$ " + fullCost.toFixed(2));