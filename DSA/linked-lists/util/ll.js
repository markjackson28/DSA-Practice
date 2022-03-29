'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  append(value) {
    let node = new Node(value);
    let curr = this.head;

    if (!this.head) {
      this.head = node;
      return this;
    }

    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
    return this;
  }

  prependBefore(value, newValue) {
    let node = new Node(newValue);
    let curr = this.head;
    let prev;

    while (curr !== null) {
      if (curr.val === value) {
        node.next = curr;
        prev.next = node;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  appendAfter(value, newValue) {
    let node = new Node(newValue);
    let curr = this.head;

    while (curr !== null) {
      if (curr.val === value) {
        node.next = curr.next;
        curr.next = node;
        return;
      }
      curr = curr.next;
    }
  }

  zipper(l1, l2) {
    let l3 = new LinkedList();
    l3.current = l3.head;
    l1.current = l1.head;
    l2.current = l2.head;

    while (l1.current !== null || l2.current !== null) {
      if (l1.current !== null && l2.current !== null) {
        l3.append(l1.current.val);
        l3.append(l2.current.val);
        l1.current = l1.current.next;
        l2.current = l2.current.next;
      } else if (l1.current !== null && l2.current === null) {
        l3.append(l1.current.val);
        l1.current = l1.current.next;
      } else if (l1.current === null && l2.current !== null) {
        l3.append(l2.current.val);
        l2.current = l2.current.next;
      }
    }
    return l3.head;
  }

  // Iterative
  reverse(ll) {
    let curr = ll.head;
    let prev = null;

    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  // Recursive
  // reverseRec(ll, prev = null) {
  //   if (ll === null) return null;
  //   const next = ll.head.next;
  //   ll.head.next = prev;
  //   return reverseRec(next, ll);
  // }

  printList(ll) {
    if(ll === null) return null;
    let values = [];
    let curr = ll.head;
    while(curr !== null) {
      values.push(curr.val);
      curr = curr.next;
    }
    return values;
  }

}

// Testing
let LL = new LinkedList();
LL.prepend(2);
LL.prepend(1);
LL.append(4);
LL.prependBefore(4, 3);
LL.append(5);
LL.append(7);
LL.appendAfter(5, 6);

// let LL1 = new LinkedList();
// LL1.append(1);
// LL1.append(3);
// let LL2 = new LinkedList();
// LL2.append(2);
// LL2.append(4);
// let zipList = new LinkedList()
// let zipper = zipList.zipper(LL1, LL2);

// let reverse = LL.reverse(LL);
let print = LL.printList(LL);

console.log(JSON.stringify(print));
