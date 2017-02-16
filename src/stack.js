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
     return this.arr.slice(1)
  }

  peek() {
    return this.arr[this.total-1];
  }

  length() {
    return this.total;
  }

  isEmpty() {
    if(this.total > 0) {
    return true
  } else{
    return false
    }
  }
}
