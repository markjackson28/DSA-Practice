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

  let join = digits.join();

  join

  return digits;
};

console.log('test', plusOne([1, 2, 3]));
// console.log('test', plusOne([9]));
// console.log('test', plusOne([9, 9]));
