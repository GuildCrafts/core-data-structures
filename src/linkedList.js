import Node from '../src/node'

'use strict'

// A list of nodes that link to each other, like a daisy-chain.
export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  insert(nodeData){
      let node = new Node({data: 'nodeData'})
      if (this.head === null){
          this.head = node
      } else {
          let currentNode = this.head
          while (currentNode.next){
              currentNode = currentNode.next
          }
          currentNode.next = node
      }

      this.length++
      return node
  }

}
