'use strict'

function Node(value){
  this.data = value;
  this.next = null;
}

export default class LinkedList {

  constructor() {
    this._length = 0
    this._head = null
    this._tail = null
  }

  getHeadNode(){
    return this._head
  }

  getTailNode(){
    return this._tail
  }

  contains(item){
    let currentNode = this._head

    while(currentNode.next && currentNode.data !== item){
      currentNode = currentNode.next
    }

    if(currentNode.data === item){
      return true
    } else {
      return false
    }
  }

  find(item){
    let currentNode = this._head

    while(currentNode.next && currentNode.data !== item){
      currentNode = currentNode.next
    }

    if(currentNode.data === item){
      return currentNode
    } else {
      return null
    }
  }


  insert(value){
    let node = new Node(value)
    let currentNode = this._head

    if(!currentNode){
      this._head = node
      this._tail = node
      this._length++

      return node
    }

    while(currentNode.next){
      currentNode = currentNode.next
    }

    currentNode.next = node
    this._tail = node
    this._length++

    return node
  }

  insertFirst(value){
    let node = new Node(value)
    let currentNode = this._head

    if(!currentNode){
      this._head = node
      this._tail = node
      this._length++

      return node
    }

    node.next = currentNode
    this._head = node
    this._length++

    return node
  }


  insertBefore(dataToFind, dataToInsert){
    let node = new Node(dataToInsert)
    let currentNode = this._head
    let lastNode = this._head

    if(!currentNode){
      this._head = node
      this._tail = node
      this._length++

      return node
    }

    if(this._length == 1){
      return insertFirst(dataToInsert)
    }

    while(currentNode.data !== dataToFind && currentNode.next){
      lastNode = currentNode
      currentNode = currentNode.next
    }

    if(lastNode === this._head){
      node.next = this._head
      this._head = node
    } else {
      lastNode.next = node
      node.next = currentNode
    }
    this._length++

    return node
  }

  insertAfter(dataToFind, dataToInsert){
    let node = new Node(dataToInsert)
    let currentNode = this._head
    let nextNode = this._head

    if(!currentNode){
      this._head = node
      this._tail = node
      this._length++

      return node
    }

    if(this._length == 1){
      return insert(dataToInsert)
    } else {
      nextNode = nextNode.next
    }

    while(currentNode.data !== dataToFind && nextNode.next){
      currentNode = nextNode
      nextNode = nextNode.next
    }

    if(nextNode === this._head){
      node.next = this._head.next
      this._head = node
    } else {
      node.next = nextNode
      currentNode.next = node
    }
    this._length++

    return node
  }


  remove(){
    let currentNode = this._head

    if(!currentNode){
      return null
    }

    while(currentNode.next.next !== null){
      currentNode = currentNode.next
    }

    currentNode.next = null
    this._tail = currentNode
    return this.getTailNode()
  }

  removeFirst(){
    let currentNode = this._head
    let nextNode = currentNode.next

    if(!currentNode){
      return null
    }

    this._head = this._head.next
    return this.getHeadNode()
  }

  isEmpty(){
    return this.size() === 0
  }

  size(){
    return this._length
  }

  clear(){
    this._head = null
    this._tail = null
    this._length = 0
  }

}
