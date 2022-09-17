'use strict';

// Given a non-empty array of integers nums , every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra
// space.

// Example:
// Input: nums = [2,2,1]
// Output: 1

// Example:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example:
// Input: nums = [1]
// Output: 1


let singleNumber = (nums) => {
  // Base check
  if (!nums) return false;

  // Create referance
  let ref = {};

  // Loop through nums arr
  for(let i = 0; i <= nums.length - 1 ; i++) {
    // declare current
    let curr = nums[i];
    // ternery to add one to obj
    ref[curr] ? ref[curr] += 1 : ref[curr] = 1;
  }

  let num = Object.values(ref);

  // return Object.values(ref);
};

let nums1 = [2, 2, 1];
// let nums2 = [4, 1, 2, 1, 2]
// let nums3 = [1];

console.log(singleNumber(nums1));
// console.log(singleNumber(nums2));
// console.log(singleNumber(nums3));
