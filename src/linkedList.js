"use strict"
import Node from '../src/node'
export default class LinkedList {
  constructor(data){
    this.head = null
    this.tail = null
    this.size = 0

  }

  getHeadNode(){
    if (!this) {
      return null
    }
    return this.head
  }

  getTailNode(){
    if (!this) {
      return null
    }
    return this.tail
  }

  contains(string){
    let current = this.head
    if (this.head.data == string) {
      return true
    }
    current = this.head.next
    if (current.data == string) {
      return true
    }
    if (current.data !== string && current.next == null) {
      return false
    }
  }


  find(string){
    let current = this.head
    while(current.data !== string){
      current = current.next
    }
    if (current.data == string) {
      return current
    }
      return -1
  }

  insert(data){
    const current = new Node(data)
    this.size ++
    if (!this.head) {
      this.head = current
    }
    else  {
      this.tail.next = current
      this.tail = current
    }
    this.tail = current
    return
  }

  insertFirst(data){
    const current = new Node(data)
    this.size ++
    if (!this.head){
      this.head = current
      this.tail = current
    }
    this.head = this.head.next
    this.head = current

  }

  insertBefore(string, data){
    this.size ++
    let stringNode = this.find(string)
    let thisNode = this.head
    let newNode = new Node(data)
    if (thisNode.data == string){
      this.head = newNode
      this.head.next = stringNode
      this.tail = thisNode
    } else {
        while (thisNode.next.data !== string) {
          thisNode = thisNode.next
        }
        if (thisNode.data === string) {
          thisNode.next = newNode
          newNode.next.data = string
    }
  }
}
insertAfter(string, data){
  let newNode = new Node(data)
  this.size ++
  let stringNode = this.find(string)
  let thisNode = this.head
  while (thisNode !== stringNode){
    thisNode = thisNode.next
  }
  newNode.next = stringNode
  thisNode.next = newNode
}

  clear(){
    this.head = null
    this.tail = null
    this.size = 0
    return this
  }
  remove(){
    this.size --
    let findTail = this.head
    if(findTail == this.tail){
      this.head = null
      this.tail = null
    }
    if(findTail !== this.tail)
    while (findTail.next.next !== null){
      findTail = findTail.next
    }
    findTail.next = null
    this.tail = findTail
  }
  removeFirst(){
    this.size --
    if (!this.head){
      return null
    }
    if (!this.head.next) {
      this.head = null
    }
    let newHead = this.head.next
    this.head = newHead
  }
  isEmpty() {
    if (this.head === null && this.tail === null && this.size === 0) {
      return true
    }
    return false
  }
}
