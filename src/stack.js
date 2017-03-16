'use strict'

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

export default class Stack {
  constructor() {
    this.topNode = null
    this.currentLength = 0
  }

  push( data ) {
    this.currentLength++

    this.topNode = new Node(data, this.topNode)
  }

  pop() {
    if ( this.isEmpty() ) return null

    let node = this.topNode

    this.topNode = this.topNode.next
    this.currentLength--

    return node.data
  }

  peek() {
    return this.topNode.data
  }

  isEmpty() {
    return this.currentLength === 0 ? true : false
  }

  length() {
    return this.currentLength
  }

}
