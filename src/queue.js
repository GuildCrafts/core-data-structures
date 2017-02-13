'use strict'

export default class Queue {
  constructor() {
    this.list = []
    this.end = null
  }
  enqueue(element) {
    this.end = element
    this.list.push(element)
  }
  dequeue() {
    return this.list.shift() || null
  }
  front() {
    return this.list[0] || null
  }
  back() {
    return this.end
  }
  isEmpty() {
    return this.list.length === 0
  }
  length() {
    return this.list.length
  }
}
