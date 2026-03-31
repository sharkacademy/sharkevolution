let password; // undefined

// while (password != "secret") {
//     password = prompt("Entre com a senha: ");
// }
// alert("Senha correta!");

do {
    password = prompt("Enter the password:");
} while (password !== "secret");