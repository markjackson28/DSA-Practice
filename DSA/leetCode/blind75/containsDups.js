'use strict';

// Given an integer array nums , return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example:
// Input: nums = [1,2,3,1]
// Output: true

// Example:
// Input: nums = [1,2,3,4]
// Output: false

// Example:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicates = (nums) => {
// check to see if nums exist
if (!nums) return false;
// create obj to reference
let reference = {};
// loop though arr
for (let i = 0; i <= nums.length; i++) {
  // this gives me the index data
  let num = nums[i];
  // ternery to add if obj contains num
  reference[num] ? reference[num] += 1 : reference[num] = 1;
  // check obj if data has more than 1
  if (reference[num] > 1) return true;
}
// return false
return false;
}

let nums = [1,2,3,1]
let nums2 = [1,2,3,4]
let nums3 = [1,1,1,3,3,4,3,2,4,2]

console.log('True', containsDuplicates(nums));
console.log('False', containsDuplicates(nums2));
console.log('True', containsDuplicates(nums3));


