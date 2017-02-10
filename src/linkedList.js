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
    this.count = 0
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
      this.count ++
      this.head = node
      return this.head
    }
    else {
      node.next = initialHead
      this.count ++
      this.head = node
      return node
    }
  }

  insert = (value) => {
    let node = new Node(value)
    let currentNode = this.head

    if(!currentNode){
      this.count ++
      this.head = node
      return this.head
    }
    else {
      while( currentNode.next !== null ) {
        currentNode  = currentNode.next
      }
      this.count ++
      currentNode.next = node
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
    while(currentNode.valueOfNode !== value) {
      if(currentNode.next === null) {
        return false
      }
      else {
        currentNode = currentNode.next
      }
    }
    return true
  }

  find = (value) => {
    let currentNode = this.head
    while (currentNode.valueOfNode !== value) {
      if(currentNode.next === null) {
        return -1
      } else {
        currentNode = currentNode.next
      }
    }
    return currentNode
  }

  insertBefore = (targetNode, newNode) => {
    let previousNode = this.head
    let currentNode = this.head
    let node = new Node(newNode)

    if(currentNode.next === null) {
      this.head = node
      node.next = currentNode
    }

    while(currentNode.valueOfNode !== targetNode) {
      previousNode = currentNode
      currentNode = currentNode.next

    }
    this.count ++
    previousNode.next = node
    node.next =  currentNode
  }

  insertAfter = (targetNode, newNode) => {
    let previousNode = this.head
    let currentNode = this.head
    let node = new Node(newNode)

    if(this.head.next === null) {
      this.head.next = node
    }
    while(previousNode.valueOfNode !== targetNode) {
      previousNode = currentNode
      currentNode = currentNode.next
    }
    this.count ++
    previousNode.next = node
    node.next = currentNode
  }

  remove = () => {
    //go to the end of the linkedList
    //set previousNode.next to null
    let previousNode = this.head
    let currentNode = this.head

    if(this.head.next === null) {
      this.head = null
      this.count --
    }
    while(currentNode.next !== null){
      previousNode = currentNode
      currentNode = currentNode.next
    }
    this.count --
    previousNode.next = null

  }

  removeFirst = () => {
    let currentNode = this.head

    if(this.head.next === null ) {
      this.head = null
      this.count --
    }
    else {
      this.count --
      this.head = currentNode.next
      currentNode.next = null
    }
  }

  isEmpty = () => {
    if(this.head === null) {
      return true
    }
    else {
      return false
    }
  }

  size = () => {
    let currentNode = this.head
    if(this.head === null ) return 0
    else if(this.head.next === null) return 1
    else {
      while(currentNode.next !== null){
        currentNode = currentNode.next
        this.count ++
      }
    }
    return this.count
  }

  clear = () => {
    return this.head = null
  }

}



module.exports = {
  Node,
  LinkedList
}
