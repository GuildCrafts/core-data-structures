export default class PriorityQueue {
  constructor() {
    let _items = []
    let _length = 0

    this.getLength = function() {
      return _length
    }
    this.incrementLength = function() {
      _length++
    }
    this.decrementLength = function() {
      _length--
    }

    this.getItems = function() {
      return _items
    }
    this.setItems = function( newItems ) {
      _items = newItems
    }
  }

  sort( items ) {
    let length = this.getLength()

    for( let i = length - 1; i > -1; i-- ) {
      for( let x = 1; x <= i; x++ ) {
        if ( items[ x-1 ].priority < items[ x ].priority ) {
          let temp = items[ x - 1 ]
          items[ x - 1 ] = items[ x ]
          items[ x ] = temp
        }
      }
    }
    this.setItems( items )
  }

  resetItemKeys( items ) {
    let index = 0
    let newItems = items.reduce( ( acc, item ) => {
      acc[ index ] = item
      index++
      return acc
    }, [] )
    return newItems
  }

  enqueue( item, priority ) {
    let items = this.getItems()
    let length = this.getLength()
    let node = new Node( item, priority )

    items[length] = node
    this.incrementLength()
    this.sort( items )
  }

  dequeue() {
    if ( this.isEmpty() ) {
      return null
    } else {
      let items = this.getItems()
      let length = this.getLength()
      let target = items[ 0 ].data
      delete items[ 0 ]
      let newItems = this.resetItemKeys( items )

      this.decrementLength()
      this.sort( newItems )
      return target
    }
  }

  front() {
    if ( this.isEmpty() ) {
      return null
    } else {
      return this.getItems()[0].data
    }
  }

  back() {
    if ( this.isEmpty() ) {
      return null
    } else {
      return this.getItems()[ this.getLength() - 1 ].data
    }
  }

  isEmpty() {
    return this.getLength() < 1 ? true : false
  }

  length() {
    return this.getLength()
  }
}

class Node {
  constructor( data, priority ) {
    this.data = data
    this.priority = priority
  }
}
