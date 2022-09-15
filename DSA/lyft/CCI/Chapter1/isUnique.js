'use strict';

// Implement an algorithm to determine if a string has all unique characters.

const isUnique = (str) => {
  // base check for string
  if (!str || typeof str != 'string') return 0;
  // create object
  let storage = {};
  // create loop
  for (let i = 0; i < str.length; i++) {
    // create current char
    let char = str[i];
    // add char to storage
    storage[char] ? storage[char] += 1 : storage[char] = 1;
    // check storage
    if (storage[char] > 1) {
      return false;
    }
  }
  return true;
} 

console.log('false', isUnique('hello'));
console.log('true', isUnique('morty'));
console.log('0', isUnique(3));
