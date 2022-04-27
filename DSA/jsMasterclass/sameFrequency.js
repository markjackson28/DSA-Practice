'use strict';

// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// const sameFrequency = (int1, int2) => {
//   let str1 = int1.toString().split('');
//   let str2 = int2.toString().split('');
//   let map = new Map();
//   for (let i = 0; i < str1.length; i++) {
//     let curr = str1[i];
//     map.set(curr, map.get(curr) + 1 || 1);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let curr = str2[i];
//     if (!map.has(curr)) return false;
//   }
//   return true;
// }

// My Attempt
// const sameFrequency = (int1, int2) => {
//   let str1 = int1.toString().split('');
//   let str2 = int2.toString().split('');

//   let check = {};
  
//   for (let i = 0; i < str1.length; i++) {
//     let int = str1[i];
//     check[int] ? check[int] += 1 : check[int] = 1
//   }
  
//   for (let i = 0; i < str2.length; i++) {
//     let int = str2[i];
//     if(!check[int]) return false;
//     else check[int] -= 1;
//   }
//   return true;
// }

// Solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

console.log('test', sameFrequency(182, 281))
// console.log('test', sameFrequency(34,14))
// console.log('test', sameFrequency(3589578, 5879385))
// console.log('test', sameFrequency(22,222))




