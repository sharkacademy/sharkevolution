let students = [
  "Mateus Lemos Soares",
  "Isabel Ribeiro Barbosa",
  "Kauê Silva Marcondes"
];


let choice = prompt("Choose a student by entering 1, 2, or 3:");
let index = parseInt(choice) - 1; // 0, 1, 2


switch (index) {
  case 0:
  case 1:
  case 2:
    let selectedStudent = students[index];
    let selectedOption = prompt(
      `You selected ${selectedStudent}. Choose an option:
      1 - Number of characters in the name
      2 - Student's initials
      3 - Student's first name
      4 - Full name in uppercase`
    );

    switch (selectedOption) {
      case "1": 
        let nameLength = selectedStudent.replace(/\s/g, '').length;
        alert(`The name has ${nameLength} characters.`);
        break;

      case "2": 
        let initials = selectedStudent.split(" ").map(word => word[0]);
        alert(`The initials are: ${initials}.`);
        break;

      case "3":
        let firstName = selectedStudent.split(" ")[0];
        alert(`The student's first name is: ${firstName}.`);
        break;

      case "4":
        alert(`The full name in uppercase: ${selectedStudent.toUpperCase()}.`);
        break;

      default:
        alert("Invalid option.");
    }
    break;

  default:
    alert("Invalid choice. Please refresh and try again.");
}
