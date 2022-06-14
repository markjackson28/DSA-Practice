'use strict';

// For a given array containing positive integers, write a code to return the sum of the elements of the array.

const arrSum = (arr) => {
  // Base check for arr
  if (!arr) return 0;
  // Declare a total variable
  let total = 0;
  // Loop over arr
  for (let i = 0; i < arr.length; i++) {
    // Sum up total with index value
    total += arr[i];
  }
  // return total
  return total;
}

console.log(arrSum([1, 1, 1, 1]));
console.log(arrSum([1, 2, 3, 4]));

