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

class EmployeeManager {
  constructor() {
    this.employees = [];
  }

  addEmployee(id, name, position, salary, hireDate) {
    const newEmployee = new Employee(id, name, position, salary, hireDate);
    this.employees.push(newEmployee);
  }

  findEmployeeById(id) {
    return this.employees.find(emp => emp.id === id);
  }

  listActiveEmployees() {
    return this.employees.filter(emp => emp.status === 'active');
  }

  calculatePayroll() {
    return this.listActiveEmployees().reduce((total, emp) => total + emp.salary, 0);
  }

  deactivateEmployee(id) {
    const employee = this.findEmployeeById(id);
    if (employee) {
      employee.setInactive();
    }
  }

  listEmployeesHiredAfter(date) {
    return this.employees.filter(emp => emp.isHiredAfter(date));
  }
}

const manager = new EmployeeManager();

manager.addEmployee(1, 'Raissa Carneiro', 'Developer', 40000, '2022-01-10');
manager.addEmployee(2, 'Izaque dos Santos', 'Designer', 40000, '2023-03-15');
manager.addEmployee(3, 'Pedro Souza', 'Manager', 40000, '2021-11-01');