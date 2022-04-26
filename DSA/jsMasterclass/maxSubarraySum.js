'use strict';

// const maxSubarrayMax = (arr, n) => {
//   if (!arr.length) return null;

//   let max = 0;
  
//   for (let i = 0; i < arr.length - n; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     } 
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }
// Time: O(n^2)
// Space: O(1)

const maxSubarrayMax = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// Time: O(n)
// Space: O(1)

console.log('test', maxSubarrayMax([1, 2, 5, 2, 8, 1, 5], 2))
