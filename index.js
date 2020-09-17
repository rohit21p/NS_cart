function Item(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
}

function Cart() {
  let cart = [];
  let price = 0;

  this.add = (item) => {
    if (cart.length === 10) throw Error("Cart is full");
    cart.push(item);
    price += item.price;
  };

  this.remove = (id) => {
    cart = cart.filter((item) => {
      if (item.id === id) {
        price -= item.price;
        return false;
      }
      return true;
    });
  };

  this.checkout = () => {
    console.log(`Total Price ${price}`);
    console.log(`Checking out.`);
    this.empty();
  };

  this.empty = () => {
    cart = [];
  };

  Object.defineProperty(this, "items", {
    get: () => cart
  });

  Object.defineProperty(this, "cost", {
    get: () => price
  });
}

let cart = new Cart();

let item = new Item(101, "Pen", 10);

cart.add(item);

item = new Item(102, "Pencil", 5);

cart.add(item);

item = new Item(103, "Eraser", 3);

cart.add(item);

cart.remove(item.id);

console.log(cart.items);

console.log(cart.cost);

console.log(cart);

cart.checkout();
