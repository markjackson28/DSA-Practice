'use strict';

// Given an array of integers, where all elements but one occur twice, find the unique element.

// const lonelyInt = (arr) => {
//   // if (arr === undefined || []) return null;
//   let count = 0;
//   for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     for(let j = i + 1; j < arr.length; j++) {
//       console.log(arr[i]);
//       console.log(arr[j]); 
//       if (arr[i] === arr[j]) {

//       } 
//     }
//   }
// }

const lonelyInt = (arr) => {
  for (const num of arr) {
      if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
  }
  return 'No lonely integers.';
};

let testArr = [1, 2, 3, 4, 3, 2, 1];
// Output 4
console.log(lonelyInt(testArr)); 


// https://jsshowcase.com/question/finding-the-lonely-integer-javascript





