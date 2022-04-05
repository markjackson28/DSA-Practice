'use strict';

const firstAndLastIndex = (arr, target) => {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = left + right >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  }
  let Tleft = find(target, arr);
  if (arr[Tleft] !== target) return [-1, -1];
  return [Tleft, find(target + 1, arr, Tleft) - 1];
}

// https://dev.to/seanpgallivan/solution-find-first-and-last-position-of-element-in-sorted-array-2fg0

// let test = firstAndLastIndex([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5);
// console.log(test);
