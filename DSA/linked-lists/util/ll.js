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

    if(!this.head) {
      this.head = node;
      return this;
    }

    let curr = this.head;
    while(curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
    return this;
  }

  
}
