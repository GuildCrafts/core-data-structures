'use strict'

export default class Queue {
  constructor() {
    this.head = 0
    this.arr = []
  }

  enqueue(element) {
    return this.arr.push(element)
  }

  dequeue() {
    return this.arr.pop()
  }

  // front() {
  //   return this.arr[0]
  // }

   // back() {
  //   return this.arr[0]
  // }

  isEmpty() {
    return this.head === 0
  }

  length() {
    return this.head
  }
}