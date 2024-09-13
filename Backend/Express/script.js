// const fs = require('fs')

import fs from "fs";

// Asynchronous
fs.readFile("./hello.txt", (err, data) => {
    console.time('timer')
  if (err) {
    console.log("ERROR");
  }
  console.log("Async", data.toString());
  console.timeEnd('timer')

});

// Synchronous
var file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// Creates the file if it doesn't already exist
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     console.log(err);
// })

// Write
fs.writeFile("bye.txt", "Sad to see you go", (err) => {
  if (err) {
    console.log("ERROR");
  }
});

// Delet
fs.unlink("./bye.txt", (err) => {
  if (err) {
    console.log("ERROR");
  }
  console.log('Inception');
});
