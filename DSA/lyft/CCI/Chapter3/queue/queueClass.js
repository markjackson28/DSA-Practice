'use strict';

// Creating a node class
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

// Queue Class
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    // New Node
    let node = new Node(value);

    if (!this.rear) {
      this.rear = node;
      this.front = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  // Dont think this works properly
  dequeue() {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    let current = this.front;
    if (current === null) {
      return 'empty sauce queue';
    } else {
      return current.value;
    }
  }

  isEmpty() {
    if (queue.front === null) {
      return true;
    } else {
      return false;
    }
  }
}
