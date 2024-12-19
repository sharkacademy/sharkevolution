// Task 3.9
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "red"
  };
  
  for (let key in car) {
    alert(`${key}: ${car[key]}`);
  }
