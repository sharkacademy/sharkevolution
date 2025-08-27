function convertTemperature(temperature, unit) {
  let convertedTemp;
  let convertedUnit;

  if (unit === "C") {
    convertedTemp = ((temperature * 9) / 5 + 32).toFixed(2);
    convertedUnit = "F";
  } else if (unit === "F") {
    convertedTemp = (((temperature - 32) * 5) / 9).toFixed(2);
    convertedUnit = "C";
  } else {
    console.log("Unidade inválida! Use 'C' para Celsius ou 'F' para Fahrenheit.");
    return;
  }
  return [temperature, convertedTemp, unit, convertedUnit];
}

let result = convertTemperature(0, "C");  
console.log(result[0] + result[2] + "° is equal to " + result[1] + result[3] + "°.");
