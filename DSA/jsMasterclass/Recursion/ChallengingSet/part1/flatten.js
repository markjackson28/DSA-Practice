'use strict';

// Write a recursive function called flatten which accepts an array and returns a new array with all the values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log('[1, 2, 3, 4, 5]', flatten([1, 2, 3, [4, 5]]))
console.log('[1, 2, 3, 4, 5]', flatten([1, [2, [3, 4], [[5]]]]))
console.log('[1,2,3]', flatten([[1], [2], [3]]))
console.log('[1,2,3]', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) 
