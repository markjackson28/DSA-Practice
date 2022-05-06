'use strict';

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// My attempt
// const areThereDuplicates = (...args) => {
//   if (args.length === []) return false;

//   const logger = {};

//   for (let i = 0; i < args.length; i++) {
//     let char = args[i];
//     logger[char] ? logger[char] += 1 : logger[char] = 1;
//     if (logger[char] > 1) return true;
//   }
//   return false;
// }

// Solution
// Frequency Counter Ex.
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// Mult Pointers Ex.
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// One Liner Ex.
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// console.log('test', areThereDuplicates(1, 2, 3));
// console.log('test', areThereDuplicates(1, 2, 2));
// console.log('test', areThereDuplicates('a', 'b', 'c', 'a'));
