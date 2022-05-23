'use strict';

// Builds up the sort by gradually creating a larger left portion which is always sorted

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    // for (let j = i - 1; j >= 0 && arr[j] > curr; j--) {
    for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
}

// function insertionSort(arr) {
//   var currentVal;
//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

// Time: O(n^2);
// Space: O(1);


console.log(insertionSort([34, 22, 10, 19, 17]));
