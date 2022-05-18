'use strict';

// Write a recursive function called someReursive which accepts an array and a callback. The function returns true if a single value is the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// const someRecursive = (arr, isOdd) => {
//   if (arr.length === 0) return false;
//   if (isOdd(arr[0])) return false;
//   return someRecursive(arr.slice(1), isOdd);
// }

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return false;
  return someRecursive(array.slice(1), callback);
}
const isOdd = val => val % 2 !== 0;

console.log('true', someRecursive([1, 2, 3, 4], isOdd)) // true
console.log('true', someRecursive([4, 6, 8, 9], isOdd)) // true
console.log('false', someRecursive([4, 6, 8], isOdd)) // false
console.log('false', someRecursive([4, 6, 8], val => val > 10)); // false
