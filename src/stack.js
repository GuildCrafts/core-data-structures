'use strict'

export default class Stack {
  constructor( data ) {
    this.storage = [],
    this.size = 0,
    this.maxSize = data.maxSize
  }

  push( item ) {
    const top = this.size

    if ( this.size === this.maxSize ) {
      return 'overflow error'
    } else {
      this.storage[top] = item
      this.size++
    }
  }

  pushMany( ...items ) {
    items.forEach( item => {
      this.push( item )
    })
  }

  pop() {
    if (this.size > 0) {
      this.size--
      return this.storage.splice(-1, 1)[0]
    } else {
      return null
    }
  }

  popMany( number ) {
    let deletedItems = []

    for( let index = 0; index < number; index++ ) {
      deletedItems.push(this.pop())
    }
    return deletedItems
  }

  peek() {
    const topIndex = this.size - 1
    return this.size > 0 ? this.storage[topIndex] : null
  }

  isEmpty() {
    return this.size > 0 ? false : true
  }

  length() {
    return this.size
  }
}
