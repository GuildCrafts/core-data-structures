'use strict'

export default class priorityQueue {
  constructor() {
    this.arr = []
  }

  enqueue(name, priority) {
    this.arr.push( {name, priority} )
    let sorted = this.arr.sort(function (a, b) {
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
    return sorted
  }

}




//   enqueue(element) {
//     return this.arr.push(element)
//   }
//
//   dequeue() {
//     return this.arr.pop()
//   }
//
//   front() {
//     return this.arr[0]
//   }
//
//    back() {
//     return this.arr[this.arr.length-1]
//   }
//
//   isEmpty() {
//     return this.head === 0
//   }
//
//   length() {
//     return this.head
//   }
// }
