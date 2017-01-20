'use strict'

export default class priorityQueue {
  constructor() {
    this.arr = []
    this.head = 0
  }

  enqueue(name, priority) {
    this.arr.push( {name, priority} )
    let sorted = this.arr.sort(function (a, b) {
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
    return sorted
  }
  // front(){
  //   return this.queue > 0 ? this.queue[0]: null;
  //   return this.queue[0] !== undefined ? this.queue[0] : null
  // })
  // dequeue() {
  //   return this.arr.splice(0, 1)
  // }
  isEmpty() {
    return this.head === 0
  }

  length() {
    return this.head
  }
}

  

