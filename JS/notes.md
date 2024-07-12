# Javascript Types

## 1. Number

- same operators (+ - \* / %)

## 2. String

- double or single quotes like in python
- adding them concatenates them ('Hello " + 'there!')
- autocasts addition to strings (10 + '34') = '1034'
- autocasts subtraction with numbers to numbers (10 - '7') = 7

## 3. Booleans

- true or false
- boolean expressions
- comparators:
  - !==
  - ===
  - \>=
  - <=
  - \>
  - <
- logical operators:
  - &&
  - ||
  - !

## 4. Undefined

- when nothing is assigned to a variable or object or array, it is undefined

## 5. Objects

- basically dictionaries in python
- you can add functions as methods

## 6. Null

-

# Variables

## 1. var

- autotyping like in python
- var george = "I am hungry!";
- must start with letter or \_ or $
- camelCase

## 2. prompt() and alert()

- allows for user input
- works same as input with python where you can enter a prompt string withing the parantheses
- automatically takes it as a string
- alert works the same but doesn't allow input

## 3. typecasting

- Number(prompt()) converts the user input to a number

```js
var first = Number(prompt("Enter the first number"));
var second = Number(prompt("Enter the second number"));
var sum = first + second;
alert("Sum is: " + sum);
```

# Control Flow

## 1. Conditionals

- if
  - same as Java
- else
  - same as Java
- else if
  - same as Java
- ternary operator
- switch

# Functions

## 1. Declaring functions

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
```

## 2. Assigning functions to a var

```js
var sayBye = function () {
  console.log("Bye");
};

sayBye();
```

## 3. Ternary Operator

```js
condition ? expr1 : expr2;
```

- this checks if the condition is true
- if it is true, it runs the first expression
- if it is false, it will run the second expression

## 4. Switch statement

```js
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You go home";
      break;
    case "right":
      whatHappens = "You find a river";
      break;
    case "left":
      whatHappens = "You run into a troll";
      break;
    default:
      whatHappens = "Invalid command";
  }
  return whatHappens;
}
```

- same as other languages

# Data Structures

## 1. Arrays

- how to declare an array

```js
var list = ["tiger", "cat", "bear", "bird"];
list[0];
```

- arrays can hold anything, including multiple types and/or functions

```js
var list = [1,2,"string", true, function()];
```

## 2. Objects

- example:

```js
var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
};
```

- basically a dictionary in python; key/value pairs
- adding another value changing the value of an existing one:

```js
user.favoriteFood = "Sushi";
user.isMarried = true;
```

- you can add functions to objects as well. These are also known as methods:

```js
user.shout = function () {
  console.log("AHHHHH");
};
```

# Loops

## 1. For loops

- similar to C/C++ for syntax

```js
for (var i = 0; i < thing.length; i++) {
  // do a thing
}
```

## 2. While loops

- same as C/C++ for syntax
- doesn't have to execute at all if the boolean expression is false

```js
var count = 0;
while (count < 10) {
  // do a thing
  count++;
}
```

## 3. Do/While loops

- same as in C/C++
- will always execute at least once because it doesn't check until after running at least once

```js
var count = 10;
do {
  // do a thing
  count--;
} while (count > 0);
```

## 4. forEach loops

- similar to python for loops
- here is the syntax:

```js
list.forEach(function(i)) {
    // do something with i
}
```

- it takes a function as an argument
- there is also a way to do something similar to enumerate:

```js
list.forEach(function(item, i)) {
    console.log(item, i);
}
```

- the above would print out each item (item) and its index (i)
- you can also just use a function that is already declared:

```js
function printItem(item, i) {
  console.log(item, i);
}

list.forEach(printItem);
```

- the above runs printItem on each item within the array (list)
- very powerful and much more clean and straightforward
- MAKE SURE IT WORKS ON ALL BROWSERS

# ES5 and ES6

## Babel

- translates and compiles new syntax into old syntax

## let and const

- new ways of declaring variables
- var isn't really used anymore
- var is function scoped, while let is block scoped
- unlike var, let can be scoped withing an if block
- const declares immutable variables that will throw errors if you try to change them
- however, if you create a const object, you can reassign values inside of it and create new values. You just won't be able to assign the object itself to something other than an object

## Destructuring

```js
const obj = {
  name: "troy",
  age: 30,
  alive: true,
};

const { name, age } = obj;
```

- this assigns const variables name and age with the corresponding values from obj
- makes it much easier to extract things from objects

## Object Properties

- you can create objects with dynamic properties:

```js
const name = "me";

const obj = {
  [name]: "yes",
  [1 + 2]: "math",
};
```

- you can also easily add existing variables to a new object:

```js
const a = "jerry";
const b = true;
const c = {};

const obj = { a, b, c };
```

- this would make obj equal this:

```js
const obj = {
  a: "jerry",
  b: true,
  c: {},
};
```

## Template Strings

- similar to f strings in python

```js
const name = "troy";
const age = 30;
const pet = "tortoise";

// these use back ticks and all characters are strings within
const greeting = `Hello ${name}, you look about ${
  age - 5
}. What a lovely ${pet} you have.`;
```

## Default Arguments

- similar to python

```js
function greet(name = "", age = 30, pet = "tortoise") {
  return `Hello ${name}, you look about ${
    age - 5
  }. What a lovely ${pet} you have.`;
}

greet();
greet("Troy", 37, "animal");
```

- calling greet() uses the default values

## Symbol Type

```js
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

console.log(sym2 === sym3);
```

- this returns false because the purpose of symbols is to make things completely unique, even if it has the same value as something else
- mostly used for property names in objects

## Arrow Functions

- these are the same:

```js
function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;
```

- if your function is just a return, you can keep it on one line
- otherwise, you can still do this:

```js
const add2 = () => {
  // do a thing
  // do a thing
  // do a thing
  // do a thing
};
```

# Advanced Functions

## Closures

```js
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
```

- in this example, 'first' intitializes the variable 'greet' to 'Hi'
- then inside of 'first', the 'second' function is declared and calls 'greet'
- finally, the reference to the 'second' function is the return value
- after all that, 'newFunc' is initialized by calling the 'first' function, which returns the reference to the 'second' function
- because second calls 'greet', which is in its parent scope, we can access that 'greet' without making it a global variable
- by doing this, 'greet' can be used again safely in another function, potentially thousands of lines down
- this essentially creates a private variable for the function

## Currying

```js
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

multiply(3, 4);
curriedMultiply(3)(4);
```

- these will return the same values, but currying makes it so that you accept inputs one at a time
- this makes it so you can do things like this:

```js
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); // this would return 25
```

## Compose

```js
// f and g are both functions
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // this would return 7
```

- think of it in terms of math
- f and g are functions
- you are calling "f of g of a", meaning you are using g(a) as an input for f

## Avoiding Side Effects and Functional Purity

- refer to pillars of functional programming
  1. make sure its not affecting the outside world
  2. always return a value
- doing this makes it deterministic
- the same inputs always return the same value

# Advanced Arrays

## Map

```js
const array = [1, 2, 3, 4];

const mapArray = array.map((num) => {
  return num * 2;
});
```

- this is better than forEach because all forEach cares about is iterating over something
- map forces you to return something, so it transforms something into something else
- you can also shorthand it into this:

```js
const mapArray = array.map((num) => num * 2);
```

## Filter

```js
const filterArray = array.filter((num) => {
  return num > 5;
});
```

- this filters out anything that returns false

## Reduce

```js
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0); // 0 is the starting value for the accumulator
```

- this 'reduces' the array to a single value
- it iteratively performs the action and remembers the value for accumulator throughout the process
- this one sums up the array, assuming you set the accumultor to start at 0

# Advanced Objects

## Reference Type

- same as Java
- objects are reference typed, meaning declaring one assigns a reference to the variable, not the actual values
- consider this:

```js
let num1 = 1;
let num2 = 1;

// this is true because num1 and num2 are actual values that are being compared
num1 === num2;

let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };

// this is true because obj2 is assigned the same reference as obj1
obj1 === obj2;

// this returns false because their references are different
obj1 === obj3;

// this updates obj2 also because they share the same reference
obj1.value = 15;
```

## Context

- confused a lot with scope
- scope is created with curly brackets
- context tells you where we are withing the object
- keyword 'this' refers to whatever is to the left of the dot that you are in

```js
const obj1 = {
  a: () => {
    console.log(this);
  },
};

// this would print out obj1 because it is the parent object referred to by 'a'
obj1.a();
```

## Instantiation

```js
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}. I'm a ${type}!`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}!`);
  }
}

const wizard1 = new Wizard("Troy", "Red Mage");
const wizard2 = new Wizard("Jerry", "White Mage");

wizard1.introduce();
wizard2.play();
```

## Pass by Value VS. Pass by Reference

- how to clone an array without passing by reference:

```js
let arr1 = [1, 2, 3, 4];
let arr2 = [].concat(arr1);
```

- how to clone an object without passing by reference:

```js
let obj = { a: "a", b: "b", c: "c" };

// these clone obj into an empty object
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
```

- if one of the values that you clone is a reference type, all of the clones will share the reference, which means changing it for one will change it for all of the clones as well:

```js
let obj = { a: "a", b: "b", c: "c", d: { level2: `I'm a reference!` } };
let clone = { ...obj };
let clone2 = { ...obj };

obj.d.level2 = `I'm still here, baby!`;
```

- printing the clones would show that d changed for everything because they share the same reference
- in order to avoid this "shallow cloning", you can do this:

```js
let superClone = JSON.parse(JSON.stringify(obj));
```

- this takes the object, turns everything into a string with stringify, then parses it and turns it back into an object with its own references
- be careful with this "deep cloning" because it can have performance implications the deeper and bigger the object gets

## Type Coercion

- the language inherently coerces types to different types when they are being compared
- basically, use '==='

# ES7 (2016)

- the includes method:

```js
let str = "helloooo";
str.includes("o"); 
// returns true

let arr = [1, 2, 3, 4];
arr.includes(1); 
// returns true
```

- exponential operator
- x**2 = x^2


# ES8 (2017)

- string padding
- padStart(10) would add 10 spaces to the beginning of a string
- padEnd(10) would add 10 spaces to the end of a string
 
```js
'tortoise'.padStart(10);
'tortoise'.padEnd(10);
```

- trailing commas in a long parameter list won't cause errors:

```js
let arr = [1,2,3,4,5,6,]
```

- Object.values and Object.entries

```js
let obj = {
    1: 'a',
    2: 'b',
    3: 'c',
}