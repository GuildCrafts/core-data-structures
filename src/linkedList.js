'use strict'

class Node{
  constructor( data, next){
    this.data = data
    this.next = next
  }
}

export default class LinkedList{

  constructor(){
    this.currentLength = 0
    this.headNode = null
    this.tailNode = null
  }

  getHeadNode(){
    return this.headNode.data
  }

  getTailNode(){
    return this.tailNode.data
  }

  contains(item){
    let currentnode = this.headNode
    while (currentnode.next!== null){
      if (currentnode.data === item){
        return true
      }
      currentnode = currentnode.next
    }
    return false
  }

  find(item){
    let currentnode = this.headNode
    while (currentnode.next!== null){
      if (currentnode.data === item){
        return currentnode
      }
      currentnode = currentnode.next
    }
    return -1
  }


  insert(item){
    let firstNode = new Node (item, this.headNode)
    if (this.headNode === null){
      this.headNode = firstNode

    }
    else if (this.tailNode === null ){
      this.headNode = new Node (this.headNode.data, firstNode)
      this.tailNode = new Node (item, this.tailNode)
    }
    else {
      let tailnode = new Node (item, null)
      this.tailNode = tailnode
      let currentnode = this.headNode
      while (currentnode !== null){
        currentnode = currentnode.next
      }
      currentnode = tailnode
    }

    this.currentLength ++
  }

  insertFirst(item){
    let firstNode = new Node (item, this.headNode)
    if (this.headNode === null){
      this.headNode = firstNode

    }
    else {
      let currentnode = this.headNode
      this.headNode = new Node (item, currentnode)
    }
    this.currentLength ++
  }

  insertBefore(beforeItem, item){
    let previousnode = null
    let currentnode = this.headNode
    let nodeafter = null
    let add = null

    while (currentnode.data !== item){
      previousnode = currentnode
      currentnode = currentnode.next
      nodeafter = currentnode.next.next
    }
    previousnode.next = new Node (beforeItem, currentnode)
    this.headNode = previousnode
    this.currentLength ++

  }

  insertAfter(beforeItem, item){
    let previousnode = null
    let currentnode = this.headNode
    let nodeafter = null
    let add = null

    while (currentnode.data !== item){
      previousnode = currentnode
      currentnode = currentnode.next
      nodeafter = currentnode.next.data.next
    }

    currentnode.next = new Node (beforeItem, nodeafter)
    previousnode.next = currentnode
    this.headNode = previousnode
    this.currentLength ++

  }

  remove(){
    if (this.tailNode === null) return null
    else {
    let currentnode = this.headNode
    let previousnode = null

    while (currentnode.next !== null){

      previousnode = currentnode
      currentnode = currentnode.next
    }

    currentnode.next = null
    this.headNode = currentnode
    this.tailNode = previousnode

    }
    this.currentLength --

  }




}
