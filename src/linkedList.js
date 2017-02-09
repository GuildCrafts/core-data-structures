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

  insert = (value) => {
    let node = new Node(value)
    let currentNode = this.head

    if(!currentNode){
      this.size ++
      this.head = node
      return this.head
    }
    else {
      while( currentNode.next !== null ) {
        currentNode  = currentNode.next
      }
      this.size ++
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
    let previousNode
    let currentNode = this.head
    let node = new Node(newNode)
    let counter = 0

    // if(currentNode.next === null) {
    //   console.log('inside if');
    //   return `Sorry, ${targetNode} is not here`
    // }
    while(currentNode.next !== targetNode) {
      counter++
      console.log('=======Loop Count ======', counter);
      previousNode = currentNode
      console.log('this is the PREVIOUS NODE', previousNode)
      currentNode = currentNode.next
      console.log('our current node' , currentNode)
      console.log('this is the NEXT NODE ', currentNode.next)
    }
    previousNode.next = node
    node.next =  targetNode
  }

}



module.exports = {
  Node,
  LinkedList
}
