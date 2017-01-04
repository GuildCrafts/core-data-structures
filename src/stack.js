'use strict'

export default class Stack {
  constructor( data ) {
    this.top = 0
    this.data = data
    this.element = []
  }

  push( data ) {
    this.top++
    this.element[ this.top ] = data
  }

  pop() {
    return this.top > 0 ? this.element.splice(this.top, 1)[0] : null
  }

  length() {return this.top}

  isEmpty() {
    return this.top === 0 ? true : false
  }

  peek() {
    return this.top > 0 ? this.element[this.top--] : null
  }
}
