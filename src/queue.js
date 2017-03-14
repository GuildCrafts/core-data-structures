'use strict'

export default class Queue {

  constructor() {
    this.queue = new Array();
  }

  length() {
    return this.queue.length
  }

  isEmpty() {
    return this.queue.length === 0 ? true : false
  }

  enqueue(item) {
    this.queue.push(item)
  }

  dequeue() {
    return this.isEmpty() ? null : this.queue.shift()
  }

  front() {
    return this.isEmpty() ? null : this.queue[0]
  }

  back() {
    return this.isEmpty() ? null : this.queue[ this.length() - 1 ]
  }

}
