let combo = 0;

while (combo < 3) {
    let answer = prompt("O leão acertou o truque? (yes/no) ").toLowerCase();
    if (answer == "yes") {
        combo++;
        alert("Truque realizado com sucesso!");
        alert(`Já são ${combo} acerto(s) consecutivo(s)`);
    } else if (answer == "no") {
        combo = 0;
        alert("O leão falhou, comece novamente.")
    } else {
        alert("Entre com yes ou no.")
    }
}
alert("Parabéns, leão treinado!")