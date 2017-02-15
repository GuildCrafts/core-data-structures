'use strict'

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

export default class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(value) {
    this.top = new Node(value, this.top)
    this.size++
  }

  length() {
    return this.size
  }
}
