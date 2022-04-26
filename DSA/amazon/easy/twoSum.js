'use strict';

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Brute Force
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// Time: O(n^2)
// Space: O(1)

const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    // curr + x = target
    // x = target - curr
    let x = target - curr;
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(curr, i);
  }
  return null;
}
// Time: O(n)
// Space: O(2n) => O(n)

// let test = twoSum([2, 7, 11, 15], 9);
// console.log("🚀 ~ file: twoSum.js ~ line 29 ~ test ", test)
// let test2 = twoSum([3, 2, 4], 6);
// console.log("🚀 ~ file: twoSum.js ~ line 31 ~ test2", test2)
// let test3 = twoSum([3, 3], 6);
// console.log("🚀 ~ file: twoSum.js ~ line 33 ~ test3", test3)
