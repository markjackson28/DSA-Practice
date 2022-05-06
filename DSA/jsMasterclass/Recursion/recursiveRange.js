'use strict';

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// recursiveRange(6) // 21
// recursiveRange(10) // 55

const recursiveRange = (num) => {
  if (num === 0) return null;
  return num + recursiveRange(num - 1);
}

console.log('Expected 21', recursiveRange(6));
console.log('Expected 10', recursiveRange(10));

