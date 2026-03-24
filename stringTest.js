// let myName = "Nicolle";

// let rightIndex = myName.length - 1;

// alert(myName.length);
// alert(myName[rightIndex]);
// alert(myName.at(0));
// alert(myName.at(-1));

// alert(`Meu nome é ${myName}`);

// let quote1 = "Hello, World!\nWelcome to Javascript!";
// alert(quote1);

// let path = "C:\\Users\\Maria\\Documents";
// alert(path);

// let quote2 = "Alice says: \"It's a great day to study Javascript\"";
// alert(quote2);

let text = "  Hello, Javascript  ";
// alert(text);

let trimmedText = text.trim();
// alert(trimmedText); // Hello, Javascript

// let slicedText = trimmedText.slice(7, 17);
// alert(slicedText); // Javascript

// let upperText = slicedText.toUpperCase();
// alert(upperText);

// let lowerText = slicedText.toLowerCase();
// alert(lowerText);

let replacedText = trimmedText.replace(/javascript/i, "ServiceNow");
alert(replacedText);

// let names = "Anica, Guilherme, Nicolle, Mariana";
// let spplitedNames = names.split(", ");
// console.log(spplitedNames);