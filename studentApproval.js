let student = {
  name: "Alice",
  grade: 8,
  attendant: false
};

let result = (student.attendant && student.grade > 6) ? `${student.name} has passed!` : `${student.name} has failed.`;
console.log(result);
