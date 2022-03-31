'use strict';

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

// Brute
let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Two-pass Hash Table (JS object)
// var twoSum = (nums, target) => {
//   const indices = {};

//   nums.forEach((item, index) => {
//       indices[item] = index
//   });

//   for (let index = 0; index < nums.length; index++) {
//       const complement = target - nums[index];

//       if (indices[complement] !== undefined && indices[complement] !== index) {
//           return [index, indices[complement]]
//       }
//   }
// };

// One-pass Hash Table
// let twoSum = (nums, target) => {
//   const indices = new Map();

//   for (let index = 0; index < nums.length; index++) {
//       const complement = target - nums[index];

//       if (indices.has(complement)) {
//           return [indices.get(complement), index]
//       }

//       indices.set(nums[index], index)
//   }
// };

let nums = [2, 7, 11, 15];
let target = 9;
let nums2 = [3,2,4]
let target2 = 6;
let nums3 = [3,3]
let target3 = 6;
let test = twoSum(nums, target);
let test2 = twoSum(nums2, target2);
let test3 = twoSum(nums3, target3);

console.log(test);
console.log(test2);
console.log(test3);
