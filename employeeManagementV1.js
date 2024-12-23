class Employee {
    constructor(id, name, position, salary, hireDate) {
      this.id = id;
      this.name = name;
      this.position = position;
      this.salary = salary;
      this.hireDate = new Date(hireDate);
      this.status = 'active'; 
    }
  
    setInactive() {
      this.status = 'inactive';
    }

  
    isHiredAfter(date) {
      return this.hireDate > new Date(date);
    }
}
  
let employees = [];

function addEmployee(id, name, position, salary, hireDate) {
    const newEmployee = new Employee(id, name, position, salary, hireDate);
    employees.push(newEmployee);
}

function findEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

function listActiveEmployees() {
    return employees.filter(employee => employee.status === 'active');
}

function calculatePayroll() {
    let total = 0;
    for (const employee of listActiveEmployees()) {
      total += employee.salary;
    }
    return total;
    // return listActiveEmployees().reduce((total, employee) => total + employee.salary, 0);
}

function deactivateEmployee(id) {
    const employee = findEmployeeById(id);
    if (employee) {
        employee.setInactive();
    }
}

function listEmployeesHiredAfter(date) {
    return employees.filter(employee => employee.isHiredAfter(date));
}
  

addEmployee(1, 'Raissa Carneiro', 'Developer', 40000, '2022-01-10');
addEmployee(2, 'Izaque dos Santos', 'Designer', 40000, '2023-03-15');
addEmployee(3, 'Pedro Souza', 'Manager', 40000, '2021-11-01');
addEmployee(4, 'Fulano', 'Manager', 40000, '2021-07-25');
console.log(listActiveEmployees());
deactivateEmployee(4);
console.log(findEmployeeById(4));
console.log(calculatePayroll());
console.log(listEmployeesHiredAfter('2022-01-10'));
