'use strict';

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

module.exports = Node;
