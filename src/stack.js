'use strict'

export default class Stack {
  constructor( items ) {
    let _items = {}
    let _length = 0

    this.getLength = function() {
      return _length
    }
    this.incrementLength = function() {
      _length++
    }
    this.decerementLength = function() {
      _length--
    }

    this.getItems = function() {
      return _items
    }
    this.setItems = function( newItems ) {
      _items = newItems
    }
  }

  push( item ) {
    let items = this.getItems()
    items[ this.getLength() ] = item
    this.incrementLength()
    this.setItems( items )
  }

  pop() {
    if ( this.isEmpty() ) {
      return null
    }
    let items = this.getItems()
    let index = this.getLength() - 1
    let target = items[ index ]
    delete items[ index ]

    this.decerementLength()
    this.setItems( items )
    return target
  }

  peek() {
    if ( this.isEmpty() ) {
      return null
    } else {
      return this.getItems()[ ( this.getLength() - 1 ) ]
    }
  }

  isEmpty() {
    return this.getLength() < 1 ? true : false
  }

  length() {
    return this.getLength()
  }
}
