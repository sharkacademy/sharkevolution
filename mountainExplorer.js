let altitude = -7.89;
let correctedAltitude = Math.abs(altitude);
alert("Altitude corrigida (valor absoluto): " + correctedAltitude + " metros");
let roundedUp = Math.ceil(correctedAltitude); 
let roundedDown = Math.floor(correctedAltitude); 
let roundedAltitude = Math.round(correctedAltitude); 
alert("Arredondado para baixo: " + roundedDown + " metros");
alert("Arredondamento normal: " + roundedAltitude + " metros");

let climbingChallenge = Math.sqrt(correctedAltitude);
alert("Dificuldade da subida: " + climbingChallenge.toFixed(2));
