'use strict';

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

const longestCommonPrefix = (strs) => {
  let prefix = "";
  if (strs === null || strs === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    // loop through all chars of the very first str
    const char = strs[0][i];
    console.log('char', char)
    for (let j = 1; j < strs.length; j++) {
      // loop through all other str in the arr
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }
  return prefix;
}

let str1 = ["flower","flow","flight"];
// let str2 = ["dog","racecar","car"];

console.log('Test 1', longestCommonPrefix(str1))
// console.log('Test 2', longestCommonPrefix(str2))
