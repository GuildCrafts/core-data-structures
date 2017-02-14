'use strict'

export default class Queue {
  constructor() {
    this._list = []
    this._backElementPosition = 0
  }
  enqueue( element ) {
    this._list[ this._backElementPosition++ ] = element
  }
  dequeue() {
    let list = this.front()
    this._list = this._list.reduce( ( memo, element, index ) => {
      if ( this._list[ index + 1 ] !== undefined ) {
        memo[ index ] = this._list[ index + 1 ]
      }
      return memo
    }, [] )
    return list
  }
  front() {
    return this._list[ this.length() - this._backElementPosition ] || null
  }
  back() {
    return this._list[ this._backElementPosition - 1 ] || null
  }
  isEmpty() {
    return this.length() === 0
  }
  length() {
    return this._list.length
  }
}
