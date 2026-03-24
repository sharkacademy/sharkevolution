let dialogo = "\"Bem-vindo, jovem explorador!\"\nHoje você encontrará segredos antigos\nque estavam escondidos há séculos.\nUse sua inteligência e coragem\npara decifrar todas as pistas.\"";
alert(`String original: ${dialogo}`);

let semQuebraLinha = dialogo.replaceAll("\n", " ");
alert(`Sem quebra de linha: ${semQuebraLinha}`);

let aspasSimples = dialogo.replaceAll("\"", "'");
alert(`Com aspas simples: ${aspasSimples}`);