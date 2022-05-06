'use strict';

// Write a function called productOfArray which takes in a n array of numbers and returns the product of them all.

// productOfArray([1, 2, 3]) // 6
// productOfArray([1, 2, 3, 10]) // 60

const productOfArray = (arr) => {
  // return has to be 1 for this to work
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// function productOfArray(arr) {
//   if(arr.length === 0) {
//       return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }

console.log('Expected 6: ', productOfArray([1, 2, 3]));
console.log('Expected 60: ', productOfArray([1, 2, 3, 10]));
