'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoList = (list1, list2) => {
  let result = [];
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    list1
    list2
    if (list1 === false && list2 === false) {
      result.push(list1[i]);
      result.push(list2[i]);
    } else if (list2 === []) {
      result.push(list1[i]);
    } else if (list1 === []) {
      result.push(list2[i]);
    }
  }
  return result;
}

// mergeTwoList([1, 2, 4], [1, 3, 4]);
mergeTwoList([], [0]);
// mergeTwoList([], [])
