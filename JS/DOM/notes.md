# DOM Selectors
- always check stuff with caniuse.com
```js
document.getElementsByTagName('h1');
document.getElementsByClassName('h1');
document.getElementById('h1');
```
- these return objects
```js
document.querySelector('h1');
document.querySelectorAll('h1', 'li');
```
- querySelector returns the first element of that type
    - it takes multiple arguments, but only returns the first found of any of them
- querySelectorAll returns all the elements of that type
    - you can pass multiple arguments and it will return all of them
- use these ones more because they are just better
```js
document.querySelector("li").getAttribute("random");
```
- this will return the value for the "random" attribute in the first li element
```js
document.querySelector("li").setAttribute("random", "1000");
```
- this is how you can change the value of attributes on a given element

# Changing Styles

```js
document.querySelector("li").style.background = "yellow";
```
- this changes the style attribute's background value to yellow
- it works, but it's not ideal because it overrides the CSS
- here are some better options:
```js
var h1 = document.querySelector("h1");
h1.className = "coolTitle"; // sets class attribute to "coolTitle"

var li = document.querySelector("li");
li.classList; // returns the list of classes in the class attribute
li.classList.add("coolTitle"); // adds coolTitle to the list of classes
li.classList.remove("coolTitle"); // removes coolTitle to the list of classes
li.classList.toggle("coolTitle"); // if it is in the classList, it removes it. if it is NOT in the
                                  // class list, it is added. useful for turning things on or off
```

# Bonus

- innerHTML is dangerout, but you might see it in some code bases
- changes what is between the brackets of an element
```js
li.innerHTML = "<strong>HI MOM</strong";
// this would change "Thing 1" to a bolded "HI MOM"
```
- parentElement and children are pretty self-explanatory

# It is important to cache selectors in variable
- you do this by assigning DOM selections to variables so that you don't have to keep having the browser query the html when you use selectors