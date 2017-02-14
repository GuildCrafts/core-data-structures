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
    if ( this._back ) { return this._back._data }
    else { return null }
  }

  front() {
    if ( this._front ) { return this._front._data }
    else { return null }
  }

  enqueue( data ) {
    const newNode = new Node( data )
    if ( this._length === 0 ) {
      this._front = newNode
    } else {
      const oldBack = this._back
      newNode._next = oldBack
    }
    this._back = newNode
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
