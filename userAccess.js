let user = {
  name: "",     
  age: 25,
  activeRegister: true
};

// if (user.name == "") {
if (!user.name) {
  console.log("User without name registered.");
} else if (user.activeRegister) {
  console.log(`${user.name} has an active registration.`);
} else {
  console.log(`${user.name} does not have an active registration.`);
}
