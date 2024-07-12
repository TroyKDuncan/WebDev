//Evaluate these:
//#1

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  animalSpeak() {
    console.log(
      `I am a ${this.type} named ${this.name} and I am ${this.color}`
    );
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  mammalSpeak() {
    console.log(`I am a mammal!!`);
  }
}

class Cow extends Mammal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(
      `Mooooo (I am ${this.name}) moo mooooo (I am a ${this.type}) moOOOO (I am the color ${this.color})`
    );
  }
}

let cow = new Cow("jerry", "cow", "brown");
cow.animalSpeak();
cow.mammalSpeak();
cow.sound();
