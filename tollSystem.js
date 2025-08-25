let vehicle = { 
  "license plate": "ABC-1234", 
  type: "truck", 
  weight: 4, 
  paid: false 
};

if (vehicle.paid) {
  console.log("Veículo " + vehicle["license plate"] + " já pagou o pedágio.");
} else {
  if (vehicle.type === "motorcycle") {
    console.log("Veículo " + vehicle["license plate"] + " deve pagar R$ 5.");
  } else if (vehicle.type === "car") {
    console.log("Veículo " + vehicle["license plate"] + " deve pagar R$ 10.");
  } else if (vehicle.type === "truck") {
    if (vehicle.weight <= 5) {
      console.log("Veículo " + vehicle["license plate"] + " deve pagar R$ 20.");
    } else {
      console.log("Veículo " + vehicle["license plate"] + " deve pagar R$ 30.");
    }
  }
}
