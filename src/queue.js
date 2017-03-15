'use strict'

class Node {
  constructor(data, next = null, last = null) {
    this.data = data
    this.next = next
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
    this.topNode = null
    this.lastNode = null
    this.currentLength = 0
  }

  enqueue( data ) {
    let newNode = new Node(data)

    if (this.currentLength === 0) {
      this.topNode = newNode
      this.lastNode = newNode
    } else {
      this.lastNode.setNext(newNode)
      this.lastNode = newNode
    }

   this.currentLength++
  }

  dequeue() {
    if ( this.isEmpty() ) return null

    let node = this.topNode
    
    this.topNode = this.topNode.next
    this.currentLength--

    return node.data
  }

  front() {
    if (this.currentLength === 0) return null

    return this.topNode.data
  }

  back() {
    if (this.currentLength === 0) return null

    return this.lastNode.data
  }

  isEmpty() {
    return this.currentLength === 0 ? true : false
  }

  length() {
    return this.currentLength
  }

}
