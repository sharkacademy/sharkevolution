let dialogue = "\"Bem-vindo, jovem explorador!\"\nHoje você encontrará segredos antigos\nque estavam escondidos há séculos.\nUse sua inteligência e coragem\npara decifrar todas as pistas.\"";
console.log(`Original string: ${dialogue}`);

let updatedDialogue = dialogue.replace(/\n/g, "");
console.log(`Updated string: ${updatedDialogue}`);

let singleQuoteDialogue = dialogue.replace(/\"/g, "'");
console.log(`Single Quote string: ${singleQuoteDialogue}`);
