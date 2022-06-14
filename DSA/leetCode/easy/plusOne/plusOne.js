'use strict';

// let plusOne = (digits) => {
//   if (!digits) return 0;

//   let lastIndex = digits[digits.length - 1] + 1;

//   if (lastIndex === 10) {
//     digits[digits.length - 1] = 1;
//     digits.push(0);
//   } else {
//     digits[digits.length - 1] = lastIndex
//   }

//   return digits;
// };

let plusOne = (digits) => {
  if (!digits) return 0;

  let joinedInts = parseInt(digits.join(''));
  joinedInts
  let result = Array.from(String(joinedInts), Number);

  return result;
};

// console.log('test', plusOne([1, 2, 3]));
// console.log('test', plusOne([4, 3, 2, 1]));
// console.log('test', plusOne([9, 9]));
// console.log('test', plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
