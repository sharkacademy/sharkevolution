let map = "A1-B2-C3-D4-E5-treasure-F6-G7-H8";
let first = map[0];
let last = map[map.length - 1];
alert("Primeiro caractere: " + first);
alert("Último caractere: " + last);

let halfIndex = Math.floor(map.length / 2);
let middle = map[halfIndex];
alert("Caractere do meio: " + middle);

let startWord = map.indexOf("treasure");
let endWord = startWord + "treasure".length;
let substringTreasure = map.slice(startTreasure, endTreasure);
alert("Substring encontrada: " + substringTreasure);