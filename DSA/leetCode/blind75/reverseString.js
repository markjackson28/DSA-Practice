'use strict';

// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

// Example:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

let reverseStr = (s) => {
  // create new arr
  let revStr = [];
  // loop arr from tail
  for (let i = s.length - 1; i >= 0; i--) {
    // push char into new arr
    revStr.push(s[i]);
  }
  // return arr
  return revStr;
};

let str1 = ["h", "e", "l", "l", "o"]
let str2 = ["H", "a", "n", "n", "a", "h"]

console.log(reverseStr(str1));


