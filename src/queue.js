'use strict'

class Node {
  constructor ( value, next ){
    this.value = value
    this.next = next
  }
}

export default class Queue {
  constructor() {
    this._back = null
    this._length = 0
  }

  enqueue (c) {
    let ourNewNode = new Node ( c, this._back )
    this._back = ourNewNode
  }

  dequeue () {
    let current = this._back
    let prev = null
    if (current === null) return null
    while ( current.next !== null ) {
      prev = current
      current = current.next
    }
    if (prev) {
      prev.next = null
    }
     else {
      this._back = null
    }
    return current.value
  }

  front () {
    let current = this._back
    if ( current === null ) return null
    while ( current.next !== null ) {
      current = current.next
    }
    return current.value
  }

  back () {
    let current = this._back
    if ( current === null ) return null
    return current.value
  }

  isEmpty () {
    let current = this._back
    if ( current === null ) {
      return true
    }
    return false
  }

  length () {
    let current = this._back
    let count = 1
    if (current === null) return 0
    while ( current.next !== null ) {
      count = count + 1
      current = current.next
    }
      return count
  }

}
