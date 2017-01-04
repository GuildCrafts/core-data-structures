'use strict'


export default class Stack {
  constructor() {
    this.top = 0
    this.elements = []
  }

  // this.push = find length of array and make sure the length = +1 after function runs
  push( thing ) {
    this.elements[this.top] = thing
    this.top++
  }

  // this.pop = find length of array and make sure length = -1 and it was taken off of the beginning
  pop() {
    this.elements.shift()
    this.top--
  }

  length() {
    return this.top
  }


  //
  //
  // this.peek = return stackArray([0])
  //
  // this.isEmpty = stackArray() === null ? true : false
  //
  // this.length = return stackArray().size

}
