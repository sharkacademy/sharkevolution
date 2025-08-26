let consecutiveTrials = 0;

while (consecutiveTrials < 3) {
  let result = prompt("O leão conseguiu realizar o truque? (sim/não)").toLowerCase();

  if (result === "sim") {
    consecutiveTrials++;
    alert("Acertos consecutivos: " + consecutiveTrials);
  } else if (result === "não") {
    consecutiveTrials = 0;
    alert("Tentativa falhou. Contador de acertos reiniciado.");
  } else {
    alert("Digite 'sim' ou 'não'.");
  }
}

alert("Parabéns! O leão concluiu o treinamento!");
