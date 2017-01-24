'use strict'

function Node( data ) {
  this._data = data
  this._next = null
}

export default class Queue {
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
    return this._back._data
  }

  front() {
    return this._front._data
  }

  enqueue( data ) {
    let newNode = new Node( data )
    let oldBack = this._back
    if ( this._length === 0 ) {
      this._front = newNode
      this._back = newNode
    } else {
      this._back = newNode
      newNode._next = oldBack
    }
    ++this._length
  }

  dequeue() {
    let oldFront = this._front
    --this._length
    let newFront = this._back
    for ( let i = 1; i < ( this._length ); ++i) {
      newFront = newFront._next
    }
    newFront._next = null
    this._front = newFront
    return oldFront._data
  }
}
