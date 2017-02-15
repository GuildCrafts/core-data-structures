'use strict'


export default class Stack {
  constructor(initialValues=[]) {
    this.elements = initialValues
    this.top = initialValues.length
  }

  // this.push = find length of array and make sure the length = +1 after function runs
  push( thing ) {
    this.elements[this.top] = thing
    this.top++
  }

  // this.pop = find length of array and make sure length = -1 and it was taken off of the beginning
  pop() {
    const value = this.elements.shift()
    this.top--
    return value
  }

  length() {
    return this.top
  }

  peek() {
    //console.log('peeked?' );
    return this.elements[0]

  }

  isEmpty() {
    return this.top === 0 ? true : false
  }
}
