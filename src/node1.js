'use strict'

// A very basic data structure that can contain some value and a reference to another node.
export default class Node {
  constructor( nodeData ) {
    this.data = nodeData.data
    this.next = null
  }

  // returns the data ("apple") of the node
  getData() {
    return this.data
  }

  // changes the reference to the next node and returns the original node
  setNext( element ) {
    this.next = element
    return this
  }

  // returns the next node, or null if no next node
  getNext() {
    if ( this.next ) {
      return this.next
    }
    return null
  }
}
