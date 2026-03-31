let day = prompt("What day is it today?");
let formattedDay = day.toLowerCase();

if (formattedDay === "sunday" || formattedDay === "saturday") {
  alert("It's the weekend. Have fun!");
} else {
  alert("Back to work!");
}

