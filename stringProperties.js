var text = "   The   Ancient    FrOg   JaVaScRiPt     WoRlD!    ";


let trimmedText = text.trim().replace(/\s+/g, " ").toLowerCase();
console.log(trimmedText);

// / marca o início da regex
// \s+ marca o conteúdo da regex (encontrar whitespaces)
// / marca o fim da regex
// g sinaliza a flag global

let totalLength = trimmedText.length;
console.log(totalLength);

console.log(trimmedText.at(7));
console.log(trimmedText[7]);

let removedWord = trimmedText.slice(28, 34);
console.log(removedWord);

let updatedText = trimmedText.replace("javascript", "servicenow");
console.log(updatedText);

let wordsArray = trimmedText.split(" ");
console.log(wordsArray[2]);

