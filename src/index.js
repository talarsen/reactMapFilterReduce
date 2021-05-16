import emojipedia from "./emojipedia.js";

const trucString = emojipedia.map(function (string) {
  return string.meaning.substring(0, 100);
});

console.log(trucString);

// var numbers = [3, 56, 2, 48, 5];

// //Map loop through an array and does something with each item  -Create a new array by doing something with each item in an array.

// // function doubleItems(x) {
// //   return x * 2;
// // }
// // const newNumbers = numbers.map(doubleItems)

// // console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// // const newNumbers = numbers.filter( function (num) {
// //   return num > 10
// // })

// // console.log(newNumbers);

// //with forEach
// var newNumbers = [];

// numbers.forEach(function(num) {
//   if(num < 10) {
//     newNumbers.push(num)
//   }
// })

// console.log(newNumbers)
// //Reduce - Accumulate a value by doing something to each item in an array.

// //Find - find the first item that matches from an array.

// var numbers = [3, 56, 2, 48, 5];

// //FindIndex - find the index of the first item that matches.
