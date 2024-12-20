// Task 4.3
function Car(make, model) {
    this.make = make;
    this.model = model;
  
    this.getCarInfo = function() {
      return `This car is a ${this.make} ${this.model}.`;
    };
  }
  
  let myCar = new Car("Toyota", "Corolla");
  
  alert(myCar.getCarInfo());  
  