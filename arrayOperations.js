// let arr = ["Maria", "Bruno", "Camila", "Bruno"];

// let brunoIndex = arr.indexOf("bruno");
// alert(brunoIndex); // -1

// let BrunoIndexUpper = arr.indexOf("Bruno");
// alert(BrunoIndexUpper); // 1

// let BrunoIndexSecond = arr.lastIndexOf("Bruno");
// alert(BrunoIndexSecond); // 3

// let camilaInArray = arr.includes("Camila");
// alert(camilaInArray); // true

// let camilaInArrayPos2 = arr.includes("Camila", 2);
// alert(camilaInArrayPos2); // ??

// let slicedArray = arr.slice(1, 3);
// alert(slicedArray); // "Bruno", "Camila"

// let newArr = ["Sergio", "Hygor"];
// let concatArr1 = arr.concat(newArr); // "Maria", "Bruno", "Camila", "Bruno", "Sergio", "Hygor"
// let concatArr2 = newArr.concat(arr); // "Sergio", "Hygor", "Maria", "Bruno", "Camila", "Bruno"
// alert(concatArr1);
// alert(concatArr2);



// let brunoIndex = arr.indexOf("Bruno");
// alert(brunoIndex);

// let lastBrunoIndex = arr.lastIndexOf("Bruno");
// alert(lastBrunoIndex);

// let isBrunoinArr = arr.includes("Bruno");
// alert(isBrunoinArr);

// let isCamilainArr = arr.includes("Camila", 1);
// alert(isCamilainArr);

// let isCamilainArr = arr.includes("Camila", 3);
// alert(isCamilainArr);

// let newarr = arr.slice(0, 2);
// alert(newarr);
// alert(arr);

// let newNames = ["Ryan", "Natalia"];
// let concatArr = arr.concat(newNames);
// alert(concatArr);




// let numbers = [1, 2, 4, 3];

// let searchNum = numbers.some(num => num > 2);
// alert(searchNum);

// let allNum = numbers.every(num => num > 2);
// alert(allNum); 

// let findNum = numbers.find(num => num > 2)
// alert(findNum);

// let findNumIndex = numbers.findIndex(num => num > 2)
// alert(findNumIndex);

let arr = [5, 9, 5, 6, 7];

alert(arr);
arr.sort();
alert(arr);

let biggerThan5 = arr.filter(num => num > 5);
alert(biggerThan5);

let newArray = arr.map(num => num * 2);
alert(newArray);

let reducedArray = arr.reduce((num1, num2) => num1 + num2);
alert(reducedArray);