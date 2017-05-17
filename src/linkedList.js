import Node from '../src/node'

'use strict'

// A list of nodes that link to each other, like a daisy-chain.
export default class LinkedList {
  constructor( listData ) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  getHeadNode(){
    return this.head
  }

  getTailNode() {
      return this.tail
  }

  contains( fruit ){
    let currentNode = this.head

    while( currentNode ) {
        if ( currentNode.data === fruit) {
              return true
        }
        if ( currentNode = this.tail ) {
            return false
        } else {
            currentNode = currentNode.next
        }
      }
  }

  find( fruit ){
    let currentNode = this.head

    while ( currentNode ) {
        if ( currentNode.dada == fruit ){
            return currentNode.data
          }
        if ( currentNode === this.tail.data ) {
            return -1
        } else {
            currentNode = currentNode.next
        }
      }
  }

  insert( nodeData ){
    let newNode = new Node( nodeData )
    let currentNode = this.head

    if ( !currentNode ) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
  }


}
