let totalCoins = 0;

do {
    let coins = Number(prompt("Quantas moedas você coletou nesta rodada?"));
    if (coins > 0 && !isNaN(coins)) {
        totalCoins += coins;
        alert(`Você agora tem ${totalCoins} moedas no total.`);
    } else {
        alert("Digite um número válido de moedas!");
    }
} while (totalCoins < 50);
alert("Você desbloqueou o tesouro mágico!")