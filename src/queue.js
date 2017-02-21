'use strict'

export default class Queue {
  constructor() {
    this.front = 0
    this.dataStore = []
  }

  enqueue(data) {
    this.dataStore[this.front++] = data
  }

  dequeue() {
    return this.front > 0 ? this.dataStore.splice(0, 1)[0] : null
  }

  front() {
    return this.front > 0 ? this.dataStore[0] : null
  }

  back() {
    return this.front > 0 ? this.dataStore[--this.front] : null
  }

  isEmpty() {
    return this.front === 0 ? true : false
  }

  length() {
    return this.front
  }

}
