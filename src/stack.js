'use strict'

export default class Stack {
  constructor() {
    this.arr = [];
    this.total = 0;
}
  push(element) {
    this.arr[this.total++] = element
  }

  pop() {
     this.arr[--this.total-1]
     return this.arr.slice(1)

  }

  peek() {
    return this.arr[this.total-1];

  }

  length() {
    return this.total;
  }

  clear() {
    this.total = 0;
    // set this array to a new empty array
  }
}
