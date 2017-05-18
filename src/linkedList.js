import Node from '../src/node'

'use strict'

// A list of nodes that link to each other, like a daisy-chain.
export default class LinkedList {
  constructor( data ) {
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

    while ( currentNode.next !== null ) {
        if ( currentNode.data === fruit ){
            return currentNode
          }
          currentNode = currentNode.next
    }
    return -1
  }

  insert( fruit ){
    let newNode = new Node( fruit )
    let currentNode = this.head

    if ( !currentNode && this.length === 0 ) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
  }

  insertFirst(fruit){
    let newNode = new Node( fruit )
    let currentNode = this.head

    if ( !currentNode ) {
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head = newNode
    }
    currentNode = currentNode.next
    this.length++
  }

  insertBefore( target, data){
    let newNode = new Node( data )
    let currentNode = this.head

    if ( this.length == 1 ) {
        newNode.next = this.head
        this.head = newNode
    }

    while ( currentNode ) {
        if ( currentNode.data == target) {
            newNode.next = currentNode
            this.head = newNode
            return
        }

        if ( currentNode.next.data == target ) {
            newNode.next = currentNode.next
            currentNode.next = newNode
            return
        }
        if ( currentNode == this.tail ){
            return 'non-existent node in this list.'
        }
        else {
            currentNode = currentNode.next
        }

    }
    this.length++
  }
}
