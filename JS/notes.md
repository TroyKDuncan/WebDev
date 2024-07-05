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
- when nothing is assigned to a variable, it is undefined

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
