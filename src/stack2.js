'use strict';
import Node from './node2';

/*
  Class declaration for Stack and export statement making that object the
  default export from this module.
*/
export default class Stack {
  constructor() {
    this.stack = [];
  }
  // Adds a specified element to the top of the stack.
  push(d) {
    const newNode = new Node({data: d});
    if (newNode.data !== undefined) {
      this.stack.push(newNode);
    }
  }
  /*
    Removes and returns the top element from the stack. Returns null if
    the stack is empty.
  */
  pop() {
    return this.stack.pop() || null;
  }
  // Returns the top node.
  peek() {
    return this.stack[this.stack.length - 1] || null;
  }
  // Returns whether the stack is empty.
  isEmpty() {
    return this.stack.length === 0;
  }
  // Returns the count of elements.
  length() {
    return this.stack.length;
  }
}
