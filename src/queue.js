'use strict'

import Node from '../src/node'
export default class Queue {
  constructor(data){
    this.head = null
    this.next = null
    this.tail = null
}

  enqueue(string) {
    const current = new Node(string)
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

  dequeue() {

  }

  front() {

  }

  back() {

  }

  isEmpty() {

  }

  length() {

  }


}
