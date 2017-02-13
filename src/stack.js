'use strict'

class Node {
  constructor(data, next) {
    this.data = data,
    this.next = next
  }
}


export default class Stack {
  constructor() {
    this.size = 0;
    this.storage = null;
  }

  push(data) {
    this.storage = new Node(data, this.storage)
    this.size++
  }

  length() {
    return this.size
  }
}
