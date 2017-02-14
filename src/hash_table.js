'use strict'
import sha256 from 'sha256'

export default class HashTable {
  constructor() {
    this._data = {}
    this._size = 0
  }

  put( key, value  ) {
    console.log('this.sha256(key)', sha256(key))
    this._data[ sha256(key) ] = value
    this._size++
  }

  get( key ) {
    return this._data[ sha256( key )]
  }

  size() {
    return this._size
  }

  contains( key ) {
    return this._data.hasOwnProperty( sha256( key ))
  }

  print() {
    for (var i = 0; i < this._size; i++) {
      if (this._data[i] != undefined) {
        console.log('Key: ', i, 'Value ', this._data[i]);
      }
    }
  }
}
