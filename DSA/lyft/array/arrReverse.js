'use strict';

// For a given array of size N, write a code to print the reverse of the array.

const arrReverse = (arr) => {
  // Base check arr
  if(!arr) return 0;
  // Create new arr
  let reverseArr = [];
  // Loop over the arr; 
  for (let i = arr.length - 1; i >= 0; i--) {
    // Push end idx of old arr into new arr
    reverseArr.push(arr[i]);
  }
  // return arr 
  return reverseArr;
}

console.log(arrReverse([3, 2, 1]));
console.log(arrReverse([1, 2, 3]));
