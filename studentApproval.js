let student = {
  name: "Maria Helena",
  grade: 9,
  attendant: true
};

let result = (student.attendant && student.grade > 6) ? `${student.name} has passed!` : `${student.name} has failed.`;

console.log(result);
