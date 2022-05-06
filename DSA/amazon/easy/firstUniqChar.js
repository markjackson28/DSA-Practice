'use strict';

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

var firstUniqChar = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i);
    map.set(curr, map.get(curr) + 1 || 0)
  }

  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i);
    if (map.get(curr) === 0) {
      return i;
    }
  }
  return -1;
};
// Time: O(n)
// Space: O(2n) => O(n)

let test = firstUniqChar('leetcode');
console.log("result", test)
let test2 = firstUniqChar('loveleetcode');
console.log("result", test2)
let test3 = firstUniqChar('aabb');
console.log("result", test3)
let test4 = firstUniqChar('dddccdbba');
console.log("result", test4)

// https://bobbyhadz.com/blog/javascript-increment-value-in-map
