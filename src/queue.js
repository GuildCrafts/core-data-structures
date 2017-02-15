'use strict'

export default class Queue {
  constructor() {
    let _items = []
    let _length = 0

    this.getItems = function() {
      return _items
    }
    this.setItems = function( newItems ) {
      _items = newItems
    }

    this.getLength = function() {
      return _length
    }
    this.incrementLength = function() {
      _length++
    }
    this.decrementLength = function() {
      _length--
    }
  }

  enqueue( item ) {
    let items = this.getItems()
    let index = this.getLength()
    items[ index ] = item
    this.incrementLength()
    this.setItems( items )
  }

  dequeue() {
    if ( this.isEmpty() ) {
      return null
    }
    let items = this.getItems()
    let target = items[ 0 ]

    delete items[ 0 ]

    let index = 0
    let newItems = items.reduce( ( acc, item ) => {
      acc[ index ] = item
      index++
      return acc
    }, [] )

    this.decrementLength()
    this.setItems( newItems )
    return target
  }

  front() {
    return this.getItems()[ 0 ] || null
  }

  back() {
    return this.getItems()[ this.getLength() - 1 ] || null
  }

  isEmpty() {
    return this.getLength() < 1 ? true : false
  }

  length() {
    return this.getLength()
  }


}
