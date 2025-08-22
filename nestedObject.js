let company = {
    name: "Tech Solutions",
    employees: [
      { name: "Mariana", position: "Developer" },
      { name: "Eliza", position: "Designer" }
    ]
  };

console.log(company.name);
company.employees.push({ name: "Pedro", position: "Consultant" });
let employeeNames = company.employees.map(obj => obj.name);
console.log(employeeNames);