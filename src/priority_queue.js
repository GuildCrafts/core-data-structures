'use strict'

function Node( data, priority ) {
  this._data = data
  this._next = null
  this._priority = priority
}

export default class PriorityQueue {
  constructor() {
    this._front = null
    this._back = null
    this._length = 0
  }

  length() {
    return this._length
  }

  isEmpty() {
    return this._length == 0
  }

  back() {
    if ( this._back ) { return this._back._data }
    else { return null }
  }

  front() {
    if ( this._front ) { return this._front._data }
    else { return null }
  }

  enqueue( data, currentPriority ) {
    const newNode = new Node( data, currentPriority )
    if ( this.isEmpty() ) {
      this._front = newNode
      this._back = newNode
    } else if ( currentPriority > this._front._priority ) {
      const oldFront = this._front
      this._front = newNode
      oldFront._next = newNode
    } else if ( currentPriority < this._back._priority ) {
      const oldBack = this._back
      this._back = newNode
      newNode._next = oldBack
    } else {
      let iteratorNode = this._back
      for ( let i = 1; i < this._length; ++i ){
        if ( iteratorNode._priority < currentPriority
          && currentPriority <= iteratorNode._next._priority ) {
            let oldNext = iteratorNode._next
            iteratorNode._next = newNode
            newNode._next = oldNext
          }
          iteratorNode = iteratorNode._next
      }
    }
    ++this._length
  }

  dequeue() {
    if ( this.isEmpty() ) { return null }
    const oldFront = this._front
    --this._length
    let newFront = this._back
    for ( const i = 1; i < this._length; ++i) {
      newFront = newFront._next
    }
    newFront._next = null
    this._front = newFront
    return oldFront._data
  }
}
