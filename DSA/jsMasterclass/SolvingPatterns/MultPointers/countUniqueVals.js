'use strict';

// My Attempt
// const countUniqueVals = (arr) => {
//   if (!arr.length) return 0;

//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     map.set(curr, map.get(curr) + 1 || 1);
//   }
//   return map.size;
// }
// Time: O(n)
// Space: O(2n) => O(n)

const countUniqueVals = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]; 
    }
  }
  return i + 1;
}
// Time: O(n)
// Space: O(1)


console.log('test', countUniqueVals([1, 1, 1, 1, 1, 2]));
