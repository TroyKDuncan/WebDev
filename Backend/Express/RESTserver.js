// This is a server built in Express.js instead of HTTP

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   console.log(req.query);
//   // localhost:3000/?name=Troy&age=29
//   // the "?" makes it a query string
//   console.log(req.headers);
//   req.params;
//   res.send("getting root");
// });

app.listen(3000);
