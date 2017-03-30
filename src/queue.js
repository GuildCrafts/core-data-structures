'use strict'

class Node {
  constructor( data, link=null ) {
    this.data = data
    this.link = link
  }
}

export default class Queue {
  constructor() {
    this.frontElement = null
    this.backElement = null
    this.size = 0
  }

  enqueue( data ) {
    if( this.frontElement === null ) {
      this.frontElement = this.backElement = new Node( data, null )
    } else {
      this.backElement = this.backElement.link = new Node( data, null )
    }
    this.size++
  }

  dequeue() {
    if( this.frontElement !== null ) {
      let result = this.frontElement.data
      this.frontElement = this.frontElement.link
      this.size--
      return result
    }
    return null
  }

  peek() {
    return this.frontElement !== null ? this.frontElement.data : null
  }

  length() {
    return this.size
  }

}
