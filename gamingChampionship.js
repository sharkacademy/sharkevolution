let totalPoints = 0;
let maxRound = parseInt(prompt("Quantas rodadas gostaria de jogar: "));

for (let round = 1; round <= maxRound; round++) {
    let points = parseInt(prompt("Digite os pontos da rodada " + round + ":"));
    totalPoints += points;
}

alert("Pontuação final no campeonato: " + totalPoints);