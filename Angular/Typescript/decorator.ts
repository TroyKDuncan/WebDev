function MenuItem(itemID: string) {
  return function (value, context) {
    return class extends value {
      id = itemID;
    };
  };
}

@MenuItem("abc")
class Pizza {
  id: string;
}

@MenuItem("xyz")
class Hamburger {
  id: string;
}

console.log(new Pizza());
console.log(new Hamburger());
