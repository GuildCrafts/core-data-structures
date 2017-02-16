export default class Set {
  constructor( arrayOfElements ) {
    let _items = arrayOfElements || []
    let _size = arrayOfElements ? arrayOfElements.length : 0

    this.getItems = function() {
      return _items
    }
    this.setItems = function( newItems ) {
      _items = newItems
      _size = _items.length
    }

    this.getSize = function() {
      return _size
    }
    this.incrementSize = function() {
      _size++
    }
    this.decrementSize = function() {
      _size--
    }
  }

  add( element ) {
    let items = this.getItems()
    if ( this.contains( element ) ) {
      return false
    } else {
      items.push( element )
      this.setItems( items )
    }
  }

  remove( element ) {
    let items = this.getItems()
    if ( !this.contains( element ) ) {
      return false
    } else {
      let newItems = items.filter( item => !(item === element) )
      this.setItems( newItems )
    }
  }

  isEmpty() {
    return this.getSize() < 1 ? true : false
  }

  contains( element ) {
    let items = this.getItems()
    let indicator = items.reduce( ( i, item ) => {
      if ( item === element ) {
        i++
      }
      return i
    }, 0 )
    return indicator > 0 ? true : false
  }

  size() {
    return this.getSize()
  }

  forEach( callbackFunction ) {
    let items = this.getItems()
    return items.map( item => callbackFunction( item ) )
  }

  clone() {
    return new Set( this.getItems() )
  }
}
