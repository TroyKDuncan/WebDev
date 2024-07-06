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