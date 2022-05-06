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

const maxSubarraySum = (arr, n) => {
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

// function maxSubarraySum(arr, num){
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i=0; i<num; i++){
//      total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//      currentTotal += arr[i] - arr[i-num];
//      total = Math.max(total, currentTotal);
//   }
//   return total;
// }

console.log('test', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
