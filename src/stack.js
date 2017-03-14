'use strict'

export default class Stack {
  // your code here
  constructor( data ) {
    this.stack = new Array();
  }

  push( data ) {
    this.stack.push(data);
  }

  pop() {
    return this.isEmpty() ? null : this.stack.pop()
  }

  peek() {
    return this.isEmpty() ? null : this.stack[ this.length() - 1 ]
  }

  isEmpty() {
    return this.length() === 0 ? true : false
  }

  length() {
    return this.stack.length
  }

}
