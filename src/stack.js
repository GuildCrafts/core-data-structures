'use strict'

export default class Stack {
  constructor() {
    this.arr = []
    this.index = 0
  }

  push(element) {
    return this.arr[this.index++] = element
  }

  pop(element) {
    return this.index === 0 ? null : this.arr[--this.index]
  }

  peek(element) {
    return this.index > 0 ? this.arr[this.index-1]: null
  }

  isEmpty(element) {
    if ( this.index === 0 ) {
      return true
    }
    return false
  }

  length() {
    return this.index
  }
}
