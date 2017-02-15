'use strict'


export default class Queue {
  constructor(initialValues=[]) {
    this.elements = initialValues
    this.top = initialValues.length
  }

  length() {
    return this.top
  }

  isEmpty() {
    return this.top === 0 ? true : false
  }

  enqueue(el) {
    this.elements.push(el)
    this.top++
    return el
  }

  dequeue() {
    if (this.top > 0) {
    var shifty = this.elements.shift()
    this.top--
    return shifty
  } else if (this.top === 0) {
      return null
    }

  }

  front() {
    if ( this.top > 0 ){
      return this.elements[0]
    } else {
      return null
    }
  }
  back() {
    if (this.top > 0) {
      return this.elements.length - 1
    } else {
      return null
    }
  }

}
