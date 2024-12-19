// Task 2.10
let company = {
    name: "Tech Solutions",
    employees: [
      { name: "John", position: "Developer" },
      { name: "Sara", position: "Designer" }
    ]
  };

alert(company.name);

company.employees.push({ name: "Peter", position: "Consultant" });
let employeeNames = company.employees.map(obj => obj.name);
alert(employeeNames);