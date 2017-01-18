'use strict'

export default class Stack {
  constructor(initialValues=[]) {
    this.elements = initialValues
  }

  push(value) {
    this.elements[this.elements.length] = value
  }

  pop() {
    if(this.elements.length === 0){
      return null
    }
    let result = this.elements.slice(-1)
    this.elements.splice(-1)
    return result

  }

  peek() {
    if (this.elements.length === 0){
      return null
    }
    return this.elements[this.elements.length -1]
  }

  isEmpty() {
    if (this.elements.length === 0 ){
      return true
    } else {
      return false
    }
  }

  length() {
    let count = 0
    for (var key in this.elements) {
        count++
    }
    return count
  }

}
