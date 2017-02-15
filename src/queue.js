'use strict'

export default class Queue {
  constructor() {
    this.storage = [],
    this.head = 0,
    this.end = 0
  }

  enqueue( item ) {
    this.storage[ this.end ] = item
    this.end++
  }

  dequeue() {
    return this.storage.length === 0 ? null : this.storage.splice( 0, 1 )[0]
  }

  length() {
    return this.storage.length
  }

  front() {
    return this.storage.length === 0 ? null : this.storage[ this.head ]
  }

  back() {
    return this.storage.length === 0 ? null : this.storage[ this.end - 1 ]
  }

  isEmpty() {
    return this.storage.length === 0 ? true : false
  }

}
