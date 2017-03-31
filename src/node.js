'use strict'

export default class Node {

  class Node {
    constructor(data) {
      this.data = data
      this.next = undefined
    }

    getData() {
      return this.data
    }

    setNext(node) {
      this.next = node
      return this
    }

    getNext() {
      return this.next
    }
  }

  const nodeA = new Node({data: "apple"})
  const nodeB = new Node({data: "banana"})

  }

  nodeA.getData() // returns the data ("apple") of the node
  nodeA.setNext(nodeB) // changes the reference to the next node and returns the original node
  nodeA.getNext() // returns the next node, or null if no next node
