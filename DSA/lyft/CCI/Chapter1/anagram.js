'use strict';

// Check Permutation: Given two strings, write a method to decide if one is permutation of the other.

const anagram = (str1, str2) => {
  // Base check
  if (!str1 && !str2) return false;

  // Create obj
  let storage = {}

  // Loop through first str to add to obj
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    storage[char] ? storage[char] += 1 : storage[char] = 1;
  }

  // Loop through second str to check
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    // if storage does not contain, return false
    if (!storage[char]) {
      return false;
    } 
    // Decrement key value
    storage[char] -= 1;
  }
  
  // return
  return true;
}

console.log('True', anagram('indian', 'ndiani'));
console.log('False', anagram('rat', 'car'));

