// Task 2.3
let text = "  Hello, JavaScript World!  ";

let trimmedText = text.trim();
alert(trimmedText);

let totalLength = trimmedText.length;
alert(totalLength);

alert(trimmedText.at(7));
alert(trimmedText[7]);

let removedWord = trimmedText.slice(7, 17);
alert(removedWord);

let updatedText = trimmedText.replace("JavaScript", "ServiceNow");
alert(updatedText);

let wordsArray = trimmedText.split(" ");
alert(wordsArray[2]);

