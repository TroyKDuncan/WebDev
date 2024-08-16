# HTTP/HTTPS

## Requests

- GET: request files
- POST: send data and add it to the server or db
- PUT: update existing data
- DELETE: delete existing data

- Twitter example:
  - GET is like getting your feed
  - POST would be posting a new tweet or creating a new account
  - PUT would be editing a tweet or updating an account
  - DELETE would be deleting a tweet or account

## Responses

- 2XX, 3XX, 4XX, 5XX codes
- files

## HTTPS

- secured with encryption

# JSON

- post data can only be text
- JavaScript Object Notation
- JSON is a seyntax for storing and exchanging data
- JSON is text, written with JavaScript object notation
- XML is also used, but the standard is leaning more toward JSON

## JSON.parse() and JSON.stringify()

```js
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

var myJSON = JSON.stringify(obj);
```

# AJAX

- used to use XHR, which was ugly and complicated
- jQuery made it nicer
- now we use fetch

# Promises

- a promise is an object that may produce a single value sometime in the future; either a resolved value, or a reason that it's not resolved (rejected)
- 3 possible states:
  - fulfilled
  - rejected
  - pending

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

promise.then((result) => result + "!").then((result2) => console.log(result2));
```

# APIs

- like a server at a restaurant
  - 