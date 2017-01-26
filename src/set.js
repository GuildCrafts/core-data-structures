'use strict'

export default class Set {
  constructor(){
    this._elements = []
  }

  size() {
    return this._elements.length
  }

  add( element ) {
    if (!this.contains( element )) { this._elements.push ( element ) }
  }

  contains( element ) {
    return this._elements.includes( element )
  }

  isEmpty() {
    return this.size() === 0
  }

  remove( element ) {
    if ( this.contains( element )) {
      const index = this._elements.indexOf( element )
      this._elements.splice( index, 1 )
    }
  }

  forEach( callbackFunction ) {
    this._elements.map( callbackFunction )
  }

  clone() {
    return Object.assign(new Set(), this)
  }

  union( inputSet ) {
    let unionSet = inputSet.clone()
    const unionFunction = ( element ) => { unionSet.add( element )}
    this.forEach( unionFunction )

    return unionSet
  }

  intersect( inputSet ) {
    let intersectSet = new Set()
    const intersectFunction = ( element ) => {
      if ( inputSet.contains( element )) { intersectSet.add( element ) }
    }
    this.forEach( intersectFunction )

    return intersectSet
  }

  difference( inputSet ) {
    let differenceSet = new Set()
    const differenceFunction = ( element ) => {
      if ( !inputSet.contains( element )) { differenceSet.add( element ) }
    }
    this.forEach( differenceFunction )

    return differenceSet
  }

  isSubset( inputSet ) {
    let result = true
    const subsetFunction = ( element ) => {
      if ( !inputSet.contains( element )) { result = false }
    }
    this.forEach( subsetFunction )
    return result
  }
}
