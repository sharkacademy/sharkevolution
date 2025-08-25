let user = {
  name: "Lucas",
  password: "12345",
  active: true,
  admin: false
};

if (!user.active) {
  console.log(`${user.name} cannot access the platform.`);
} else if (user.active && user.admin) {
  console.log(`${user.name} has full access.`);
} else if (user.active || user.password) {
  console.log(`${user.name} can access the platform.`);
} else {
  console.log(`${user.name} cannot access the platform.`);
}
