let produto = {
  nome: "Camisa",
  preco: 50,
  estoque: 10
};

let opcao;

do {
  opcao = parseInt(prompt(
    "Escolha uma opção:\n" +
    "1 - Exibir informações do produto\n" +
    "2 - Alterar preço do produto\n" +
    "3 - Vender uma unidade\n" +
    "4 - Encerrar"
  ));

  switch(opcao) {
    case 1:
      alert(`Produto: ${produto.nome}\nPreço: R$${produto.preco}\nEstoque: ${produto.estoque}`);
      break;
    case 2:
      let novoPreco = parseFloat(prompt("Digite o novo preço:"));
      produto.preco = novoPreco;
      alert("Preço atualizado com sucesso!");
      break;
    case 3:
      if (produto.estoque > 0) {
        produto.estoque--;
        alert("Venda realizada com sucesso!");
      } else {
        alert("Estoque esgotado!");
      }
      break;
    case 4:
      alert("Programa encerrado.");
      break;
    default:
      alert("Opção inválida, tente novamente.");
  }
} while (opcao !== 4);
