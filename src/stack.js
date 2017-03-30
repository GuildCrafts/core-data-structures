'use strict'

export default class Stack {
  // your code here
  constructor(){
    // end of the array is the top of the Stack
    this.stack = []
  }

  push( item ) {
    this.stack[this.stack.length] = item
  }

  pop() {
    return this.stack.splice(-1, 1)[0]

  }

  peek() {
    return this.stack[this.stack.length-1]
  }

  length() {
    return this.stack.length
  }

  isEmpty() {
    return this.stack.length === 0
  }
}

let foo = new Stack()
