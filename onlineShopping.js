function addItemToCart(cart, name, price, quantity) {
  const itemIndex = cart.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += quantity;
  } else {
    const newItem = { name, price, quantity };
    // const newItem = { name: name, price: price, quantity: quantity }
    cart.push(newItem);
  }
  return cart;
}

function removeItemFromCart(cart, name) {
  const itemIndex = cart.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    return cart;
  }
  return "Item not found in cart!";
}

function updateItemQuantity(cart, name, newQuantity) {
  const item = cart.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (item) {
    item.quantity = newQuantity;
    return item;
  }
  return "Item not found!";
}

function calculateTotal(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

function findItemByName(cart, name) {
  for (const item of cart) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return item;
    }
  }
  return "Item not found!";
}

let cart = [];

console.log(addItemToCart(cart, "Laptop", 1000, 1));
console.log(addItemToCart(cart, "Headphones", 150, 2));
console.log(updateItemQuantity(cart, "Headphones", 3));
console.log(removeItemFromCart(cart, "Laptop"));
console.log(calculateTotal(cart));
console.log(findItemByName(cart, "Headphones"));
console.log(findItemByName(cart, "Laptop")); 
