'use strict';

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const isValid = (s) => {
  if (s === "") return false;
  const stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

let test1 = isValid("()");
let test2 = isValid("()[]{}");
let test3 = isValid("(]");

console.log('Test 1', test1);
console.log('Test 2', test2);
console.log('Test 3', test3);

// https://javascript.plainenglish.io/javascript-algorithms-valid-parentheses-leetcode-71c5b2f61077
