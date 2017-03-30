'use strict'

class Node {
  constructor( data, link ) {
    this.data = data
    this.link = link
  }
}

export default class Stack {
  constructor() {
    this.head = null
    this.size = 0
  }

  push( data ) {
    this.head = new Node( data, this.head )
    this.size++
  }

  pop() {
    if ( this.head !== null ) {
      let topElement = this.head.data
      this.head = this.head.link
      this.size--
      return topElement
    }
    return null
  }

  peek() {
    return this.head !== null ? this.head.data : null
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }

}
