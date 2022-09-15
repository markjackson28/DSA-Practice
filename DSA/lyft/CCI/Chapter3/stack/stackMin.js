'use strict';

// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, min should all operate in O(1) time.

// class Stack {
//   constructor() {
//     this.length = 0;
//   }

//   push(value) {
//     if (value) {
//       this[this.length++] = value;
//     }
//   }

//   pop() {
//     if (!this.length) {
//       throw new Error;
//     }
//     let item = this[this.length - 1];
//     delete this[this.length - 1];
//     this.length--;
//     return item;
//   }

//   peek() {
//     if (!this.length) {
//       throw new Error
//     }
//     return this[this.length - 1];
//   }

//   isEmpty() {
//     if (this.length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// let stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);


const stackMin = (stack) => {
  // Base check if stack exist
  if (!stack) return 0;
  // Create a min variable
  let min = 0;
  // Create current variable
  let current = stack.pop();
  current
  // Traverse through stack
  while (current) {
    // if current is < min 
    console.log();
    if (current < min) {
      // min = current
      min = current;
      current = stack.pop();
    }
    current = stack.pop();
  }
  // return min
  return min;
}

console.log(stackMin([1, 2, 4, 5, 7]));

