'use strict';

// Write code to remove duplicates from an unsorted linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const a2 = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = a2;
a2.next = b;
b.next = c;
c.next = d;

// console.log(a);

const removeDupes = (ll) => {
  // Base check to see if LL exists
  if (!ll) return null;
  // declare a current
  let current = ll;
  // create storage obj
  let storage = {};
  // traverse through 
  while (current.next !== null) {
    storage[current.val] ? storage[current.val] += 1 : storage[current.val] = 1;
    // if (storage[current.val] > 1) {
    //   current = current.next.next;
    // } 
    current = current.next;
  }
  // return head/node
  return storage;
}

console.log(removeDupes(a));
