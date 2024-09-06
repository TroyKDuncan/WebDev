// const script2 = require('./script2')
import { largeNumber } from "./script2.js";

const a = largeNumber;
const b = 7;

// This makes it asynchronous! Wowzers.
setTimeout(() => {
  console.log(a + b);
}, 2000);
