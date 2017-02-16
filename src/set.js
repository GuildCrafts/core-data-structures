'use strict'

// export default
class Set {

  constructor( data = [] ) {
    this._data = data
  }

  add( element ) {
    if ( !element ) {
      throw new Error( 'No element available to add' )
    }
    this._data.push( element )
  }

  isEmpty() {
    return this.size() === 0
  }

  contains( element ) {
    return this._data.includes( element )
  }

  remove( element ) {
    if ( !this._data.includes( element ) ) {
      throw new Error( 'Element does not exist in set' )
    }
    this._data = this._data.filter( data => data !== element )
  }

  forEach( givenFunction ) {
    if ( !givenFunction ) {
      throw new Error( 'No function provided' )
    }
    try {
      return this._data.forEach( givenFunction )
    }
    catch ( error ) {
      throw new Error( error.message )
    }
  }

  size() {
    return this._data.length
  }

  union( otherSet ) {
    return otherSet.reduce( ( memo, element ) => {
      if ( !memo.includes( element ) ) {
        memo.push( element )
      }
      return memo
    }, this._data ).sort( ( element, nextElement ) => {
      return element > nextElement
    })
  }

  intersect( otherSet ) {
    return otherSet.reduce( ( memo, element ) => {
      if ( this._data.includes( element ) ) {
        memo.push( element )
      }
      return memo
    }, [] ).sort( ( element, nextElement )  => {
      return element > nextElement
    })
  }

  difference( otherSet ) {

  }

  isSubset( otherSet ) {
    return otherSet.filter( element => this._data.includes( element ) ).length === otherSet.length
  }

  clone() {
    return new Set( this._data )
  }

}

module.exports = Set
const mySet = new Set( [ 5, 6, 7, 8 ] )
console.log('mySet._data', mySet._data)
console.log('mySet.size()', mySet.size())
console.log('mySet.contains( 5 )', mySet.contains( 5 ))
console.log('mySet.add( 99 )', mySet.add( 99 ))
console.log('mySet.isSubset( [ 5, 6, 8, 1 ])', mySet.isSubset( [ 5, 6, 8, 1 ]))
console.log('mySet.remove( 5 )', mySet.remove( 5 ))
console.log('mySet._data', mySet._data)
console.log('mySet.clone()', mySet.clone())
console.log('mySet._data', mySet._data)
console.log('mySet.union( [ 9, 10, 99, 5, 6 ] )', mySet.union( [ 9, 10, 99, 5, 6 ] ))
console.log('mySet.intersect( [ 9, 10, 98, 99 ] ) ', mySet.intersect( [ 9, 10, 98, 99 ] ) )
