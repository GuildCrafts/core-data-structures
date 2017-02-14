'use strict'

function Node( data ) {
  this._data = data
  this._next = null
}

export default class LinkedList {
  constructor() {
    this._tail = null
    this._head = null
    this._size = 0
  }

  size() {
    return this._size
  }

  isEmpty() {
    return this._size == 0
  }

  clear() {
    this._tail = null
    this._head = null
    this._size = 0
  }

  getHeadNode() {
    if ( this._head ) { return this._head }
    else { return null }
  }

  getTailNode() {
    if ( this._tail ) { return this._tail }
    else { return null }
  }

  insert( data ) {
    const newNode = new Node( data )
    if ( this._size === 0 ) {
      this._tail = newNode
    } else {
      newNode._next = this._head
    }
    this._head = newNode
    ++this._size
  }

  insertFirst( data ) {
    const newNode = new Node( data )
    if ( this._size === 0 ) {
      this._head = newNode
    } else {
      const oldTail = this._tail
      oldTail._next = newNode
    }
    this._tail = newNode
    ++this._size
  }

  remove() {
    if ( this.isEmpty() ) { return null }
    const oldHead = this._head
    --this._size
    let newHead = oldHead.next
    this._head = newHead
    return oldHead._data
  }

  removeFirst() {
    if ( this.isEmpty() ) { return null }
    const oldTail = this._tail
    --this._size
    let newFront = this._head
    for ( const i = 1; i < this._size; ++i) {
      newFront = newFront._next
    }
    newFront._next = null
    this._tail = newFront
    return oldTail._data
  }

  find( query ) {
    if ( this.isEmpty() ) { return -1 }
    let iteratorNode = this.getHeadNode()
    while ( iteratorNode != null ) {
      if ( iteratorNode._data == query ) {
        return iteratorNode }
      else { iteratorNode = iteratorNode._next }
    }
    if ( iteratorNode === null ) { return -1 }
  }

  contains( query ) {
    if ( this.isEmpty() ) { return false }
    let iteratorNode = this.getHeadNode()
    while ( iteratorNode != null ) {
      if ( iteratorNode._data == query ) {
        return true }
      else { iteratorNode = iteratorNode._next }
    }
    return false
  }

  insertAfter( query, newData ) {
    const targetNode = this.find( query )
    if ( targetNode != -1) {
      const newNode = new Node( newData )
      newNode._next = targetNode._next
      if ( targetNode._next == null ) {
        this._tail = newNode
      }
      targetNode._next = newNode
      ++this._size
    }
  }

  insertBefore( query, newData ) {
    const newNode = new Node( newData )
    if ( this.getHeadNode()._data == query ) {
      this.insert(newData)
    } else {
      let iteratorNode = this.getHeadNode()
      while ( iteratorNode != null ) {
        if ( iteratorNode._next._data == query ) {
          newNode._next = iteratorNode._next
          iteratorNode._next = Object.assign( new Node(), newNode )
          iteratorNode = null
          ++this._size
          }
        else { iteratorNode = iteratorNode._next }
      }
    }
  }
}
