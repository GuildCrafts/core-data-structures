'use strict'

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains() {

  }

  find() {

  }

  insert(item) {
    const newNode = new Node(item)
    if (this.head === null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.count++
    // if (this.count = 0){
    //   this.head = newNode
    //   this.tail = newNode
    // } else {
    //   this.tail = newNode
    // }
    return newNode
  }

  insertFirst() {

  }

  insertBefore() {

  }

  insertAfter() {

  }

  remove() {

  }

  removeFirst() {

  }

  isEmpty() {

  }

  size() {

  }

  clear() {

  }

}
