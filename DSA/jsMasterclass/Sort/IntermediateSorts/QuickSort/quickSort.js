'use strict';

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // Left side
    quickSort(arr, left, pivotIdx - 1);
    // Right side
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

// Time 
  // Best: O(n log n)
  // Avg: O(n log n)
  // Worst: O(n^2)
// Space
  // O(log n)

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));


