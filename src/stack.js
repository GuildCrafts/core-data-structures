'use strict'

export default class Stack {
  constructor() {
    this.arr = []
  }

  push(element) {
    return this.arr[this.arr.length++] = element
  }

  pop(element) {
    return this.arr.length === 0 ? null : this.arr[--this.arr.length]
  }

  peek(element) {
    return this.arr.length > 0 ? this.arr[this.arr.length-1]: null
  }

  isEmpty(element) {
    if ( this.arr.length === 0 ) {
      return true
    }
    return false
  }

  length() {
    return this.arr.length
  }
}
