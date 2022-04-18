'use strict';

const validAnagram = (str1, str2) => {
  // Base check to see if length match from both strs
  if (str1.length !== str2.length) return false;

  // Split the str, sort(accending), join after sorting
  let a = str1.split('').sort().join();
  let b = str2.split('').sort().join();

  // if a strictly matches b, return true
  if (a === b) return true;
  // if not, return false
  else if (a !== b) return false;
}

console.log(validAnagram('rat', 'car'))



