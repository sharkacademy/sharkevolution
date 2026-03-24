var text = "   The   Ancient    FrOg   JaVaScRiPt     WoRlD!    ";
alert(text);

let trimmedText = text.trim().replace(/\s+/g, " ").toLowerCase();
// alert(trimmedText);

// let totalLength = trimmedText.length;
// alert(totalLength);

// alert(trimmedText.at(7));
// alert(trimmedText[7]);

// let removedWord = trimmedText.slice(28, 34);
// alert(removedWord);

// let updatedText = trimmedText.replace("javascript", "servicenow");
// alert(updatedText);

let wordsArray = trimmedText.split(" ");
alert(trimmedText.at(-1));