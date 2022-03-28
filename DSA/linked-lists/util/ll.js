'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let node = new Node(value);

    if(!this.head) {
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

    if(!this.head) {
      this.head = node;
      return this;
    }

    while(curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
    return this;
  }

  appendBeforeVal(value, newValue) {
    let node = new Node(newValue);
    let curr = this.head;
    let prev;

    while(curr !== null) {
      if (curr.val === value) {
        node.next = curr;
        prev.next = node;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

}

// Testing
let LL = new LinkedList();
LL.prepend(2);
LL.prepend(1);
LL.append(4);
LL.appendBeforeVal(4, 3);

console.log(JSON.stringify(LL));
