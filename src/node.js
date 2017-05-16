'use strict'

// A very basic data structure that can contain some value and a reference to another node.
export default class Node {
  constructor(data) {
    this.data = data
    this.next = undefined
  }

// returns the data ("apple") of the node
  getData() {
    return this.data.data
  }

// changes the reference to the next node and returns the original node
  setNext(element) {
    this.data.next = element
    return this
  }

 // returns the next node, or null if no next node
  getNext() {
    if (this.data.next) {
      return this.data.next
    }
    return null
  }
}
