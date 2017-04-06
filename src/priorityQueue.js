'use strict'

class PriorityNode {
  constructor( data, priority, next = null ) {
    this.data = data
    this.priority = priority
    this.next = next
  }

  getData() {
    return this.data
  }

  getNext() {
    return this.next
  }

  setNext(node) {
    this.next = node
  }

  getPriority() {
    return this.priority
  }

  setPriority(priorityNumber) {
    this.priority = priorityNumber
  }
}

export default class PriorityQueue {
  constructor() {
    this.frontNode = null
    this.backNode = null
    this.currentLength = 0
  }

  enqueue( data, priority ) {
    let stack = []
    let newNode = new PriorityNode(data, priority)

    if ( this.isEmpty() ) {
      this.frontNode = newNode
      this.backNode = newNode
        // console.log('=-=-=-=-=-=-when empty..', this.frontNode.priority)
    } else {

        // console.log('=-=-=-=-=-=-', this.frontNode.priority)
      while(this.frontNode.priority > priority) {
        stack.unshift(this.frontNode)
        this.dequeue()
      }

      stack.forEach(function(node) {
        node.next = this.frontNode 
        
        this.enqueue(node)
      })
    }

    this.currentLength++
  }

  dequeue() {
    if ( this.isEmpty() ) return null

    let node = this.frontNode

    this.frontNode = this.frontNode.next
    this.currentLength--

    return node
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
