let totalCoins = 0;

do {
  let coins = parseInt(prompt("Quantas moedas você coletou nesta rodada?"));
  if (!isNaN(coins) && coins > 0) {
    totalCoins += coins;
    alert("Total de moedas até agora: " + totalCoins);
  } else {
    alert("Por favor, digite um número maior que zero.");
  }
} while (totalCoins < 50);

alert("Parabéns! Você coletou " + totalCoins + " moedas e desbloqueou o tesouro mágico!");
