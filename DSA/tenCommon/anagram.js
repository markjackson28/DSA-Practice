'use strict';

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let a = str1.split('').sort().join();
  let b = str2.split('').sort().join();

  if (a === b) return true;
  else if (a !== b) return false;
}

// let test = anagram('indian', 'ndiani');
// console.log(test);

