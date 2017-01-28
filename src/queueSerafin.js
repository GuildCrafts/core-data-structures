'use strict'

class Node {
  constructor(value, next){
    this.value = value
    this.next = next
    this.iAmInFront = false
  }
}

export default class Queue {
  constructor() {
    this._back = null
    this.thisQueueIsEmpty = true
    this.length = 0
  }

  enqueue (c) {
    if(thisQueueIsEmpty){
      let ourNewNode = new Node(c, this._back)
      ourNewNode.iAmInFront = true
    } else {
      let ourNewNode = new Node(c, this._back)
    }
    this.thisQueueIsEmpty = false
    this._back = ourNewNode
  }

  dequeue () {
    let current = this._back
    let prev = null
    if(current === null) return null
    while (current.iAmInFront === false){
      prev = current
      current = current.next
    }

    if(prev !== null){
      prev.iAmInFront = true
    } else { // I only run when there was only 1 person in queue
      this.thisQueueIsEmpty = true
      this._back = null
    }

    return current.value // prev = ( a )
  }
 }
