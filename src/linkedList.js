'use strict'

class Node{
  constructor(valueOfNode){
    this.valueOfNode = valueOfNode
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  getHeadNode = () => {
    if( !this.head ){
      return null
    }
    else {
      return this.head
    }
  }

  insertFirst = (value) => {
    let node = new Node(value)
    let initialHead = this.head

    if(!initialHead){
      this.size ++
      this.head = node
      return this.head
    }
    else {
      node.next = initialHead
      this.size ++
      this.head = node
      return node
    }
  }

  getTailNode = () => {
    let currentNode = this.head

    if( !this.head ) {
      return null
    }
    else {
      while( currentNode.next !== null ) {
        currentNode = currentNode.next

       }
      return currentNode
    }
  }

  contains = (value) => {
    let currentNode = this.head

    while( currentNode.valueOfNode !== value) {
      if(currentNode.next === null) {
        return false
      }
      else {
        currentNode = currentNode.next
      }
    }
    
    return true
  }

}



module.exports = {
  Node,
  LinkedList
}
