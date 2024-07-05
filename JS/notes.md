# Javascript Types

## 1. Number
- same operators (+ - * / %)

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
- must start with letter or _ or $
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
    console.log("Hello")
}

sayHello();
```
## 2. Assigning functions to a var
```js
var sayBye = function() {
    console.log('Bye')
}

sayBye();
```

# Data Structures

## 1. Arrays
- how to declare an array
```js
var list = ["tiger","cat","bear","bird"];
list[0]
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
    isMarried: false
}
```
- basically a dictionary in python; key/value pairs
- adding another value changing the value of an existing one:
```js
user.favoriteFood = "Sushi";
user.isMarried = true;
```
- you can add functions to objects as well. These are also known as methods:
```js
user.shout = function() {
    console.log("AHHHHH")
}
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