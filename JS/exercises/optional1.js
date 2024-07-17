// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. For example
// answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2]
// should return [[1,2], ["2", "3"]]

// sort
// group by number

// first, sort the array numerically
// let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// let sortedArr = input.toSorted((a, b) => a - b);

// next, filter by value
// let filteredArr = sortedArr.filter((num2) => {
//   return num2 === num1;
// });
// sortedArr;

// let innerArr = [num];
// let nextValue = sortedArr.shift();
// while (nextValue === innerArr[0]) {
//   innerArr.push(nextValue);
//   nextValue = sortedArr.shift();
// }
// mainArr.push(innerArr);
// innerArr = [nextValue];
// nextValue = sortedArr.shift();
// while (nextValue === innerArr[0]) {
//   innerArr.push(nextValue);
//   nextValue = sortedArr.shift();
// }

// while (sortedArr.length() !== 0) {}

const sortToArrays = (num, arr, answer) => {
  if (arr.length === 0) {
    answer.push([num]);
    return answer;
  } else {
    let innerArr = [num];
    let nextValue = arr.shift();
    while (nextValue === innerArr[0]) {
      innerArr.push(nextValue);
      nextValue = arr.shift();
    }
    answer.push(innerArr.length === 1 ? innerArr[0] : innerArr);
    sortToArrays(nextValue, arr, answer);
  }
  return answer;
};

let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let sortedArr = input.toSorted((a, b) => a - b);

let sortedByArrays = [];
let num = sortedArr.shift();
sortedByArrays = sortToArrays(num, sortedArr, sortedByArrays);
console.log(sortedByArrays);
