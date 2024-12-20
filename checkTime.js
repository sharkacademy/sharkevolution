// Task 4.1
function timeOfDay() {
    let now = new Date(); 
    let hours = now.getHours();  
  
    if (hours >= 6 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
}
  
alert(timeOfDay());  
  