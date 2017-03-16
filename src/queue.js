'use strict'

class Node {
  constructor( data, next ) {
    this.data = data
    this.next = null
  }

  setNext(node) {
    this.next = node
  }

  getNext() {
    return this.next
  }
}

export default class Queue {
  constructor() {
    this.frontNode = null
    this.backNode = null
    this.currentLength = 0
  }

  enqueue( data ) {
    let newNode = new Node(data)

    if ( this.isEmpty() ) {
      this.frontNode = newNode
      this.backNode = newNode
    } else {
      this.backNode.setNext(newNode)
      this.backNode = newNode
    }

   this.currentLength++
  }

  dequeue() {
    if ( this.isEmpty() ) return null

    let currentFrontNode = this.frontNode
    
    this.frontNode = currentFrontNode.next
    this.currentLength--

    return currentFrontNode.data
  }

  front() {
    if ( this.isEmpty() ) return null

    return this.frontNode.data
  }

  back() {
    if ( this.isEmpty() ) return null

    return this.backNode.data
  }

  isEmpty() {
    return this.currentLength === 0 ? true : false
  }

  length() {
    return this.currentLength
  }

}
