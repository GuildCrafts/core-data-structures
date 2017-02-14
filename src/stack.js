'use strict'

export default class Stack {
  constructor(){
    this._elements = []
    this._topIndex = 0
  }

  length() {
    return this._topIndex
  }

  push(data) {
    this._elements[ this._topIndex++ ] = data
  }

  peek() {
    return this._topIndex === 0 ? null : this._elements[ this._topIndex + 1 ]
  }

  isEmpty() {
    return this._topIndex === 0
  }

  pop() {
    if ( this.isEmpty() ) { return null }
    const result = this._elements[ this._topIndex + 1 ]
    delete this._elements[ this._topIndex-- + 1 ]
    return result
  }
}
