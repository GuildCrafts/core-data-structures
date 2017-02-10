'use strict'

class Node{
  constructor(valueOfNode){
    this.valueOfNode = valueOfNode
    this.nextNode = null
  }

  data = () => {
    return this.valueOfNode
  }

  next = () => {
    return this.nextNode
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
      node.nextNode= initialHead
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
      while( currentNode.nextNode !== null ) {
        currentNode = currentNode.nextNode
      }
      this.count ++
      currentNode.nextNode = node
    }
  }

  getTailNode = () => {
    let currentNode = this.head

    if( !this.head ) {
      return null
    }
    else {
      while( currentNode.nextNode !== null ) {
        currentNode = currentNode.nextNode

       }
      return currentNode
    }
  }

  contains = (value) => {
    let currentNode = this.head
    while(currentNode.valueOfNode !== value) {
      if(currentNode.nextNode === null) {
        return false
      }
      else {
        currentNode = currentNode.nextNode
      }
    }
    return true
  }

  find = (value) => {
    let currentNode = this.head
    while (currentNode.valueOfNode !== value) {
      if(currentNode.nextNode === null) {
        return -1
      } else {
        currentNode = currentNode.nextNode
      }
    }
    return currentNode
  }

  insertBefore = (targetNode, newNode) => {
    let previousNode = this.head
    let currentNode = this.head
    let node = new Node(newNode)

    if(currentNode.nextNode === null) {
      this.head = node
      node.nextNode = currentNode
    }

    while(currentNode.valueOfNode !== targetNode) {
      previousNode = currentNode
      currentNode = currentNode.nextNode

    }
    this.count ++
    previousNode.nextNode = node
    node.nextNode =  currentNode
  }

  insertAfter = (targetNode, newNode) => {
    let previousNode = this.head
    let currentNode = this.head
    let node = new Node(newNode)

    if(this.head.nextNode === null) {
      this.head.nextNode = node
    }
    while(previousNode.valueOfNode !== targetNode) {
      previousNode = currentNode
      currentNode = currentNode.nextNode
    }
    this.count ++
    previousNode.nextNode = node
    node.nextNode = currentNode
  }

  remove = () => {
    let previousNode = this.head
    let currentNode = this.head

    if(this.head.nextNode === null) {
      this.head = null
      this.count --
    }
    while(currentNode.nextNode !== null){
      previousNode = currentNode
      currentNode = currentNode.nextNode
    }
    this.count --
    previousNode.nextNode = null

  }

  removeFirst = () => {
    let currentNode = this.head

    if(this.head.nextNode === null ) {
      this.head = null
      this.count --
    }
    else {
      this.count --
      this.head = currentNode.nextNode
      currentNode.nextNode = null
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
    else if(this.head.nextNode === null) return 1
    else {
      while(currentNode.nextNode !== null){
        currentNode = currentNode.nextNode
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
