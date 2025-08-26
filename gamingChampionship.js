let totalPoints = 0;

for (let round = 1; round <= 5; round++) {
  let points = parseInt(prompt("Digite os pontos da rodada " + round + ":"));
  totalPoints += points;
}

alert("Pontuação final no campeonato: " + totalPoints);
