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
  front(){
    return this.queue > 0 ? this.queue[0]: null;
    return this.queue[0] !== undefined ? this.queue[0] : null
  })
  dequeue(name, priority) {
    this.arr.pop( {name, priority} )
    let sorted = this.arr.sort(function (a, b) {
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
    return sorted
  }

}

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
