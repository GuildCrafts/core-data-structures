'use strict'

export default class Stack {
  constructor(){
    this._storage = []
    this._topIndex = -1
  }

  length() {
    return this._topIndex + 1
  }

  push(data) {
    this._storage[ ++this._topIndex ] = data
  }

  peek() {
    return this._topIndex === -1 ? null : this._storage[ this._topIndex ]
  }

  isEmpty() {
    return this._topIndex === -1
  }

  pop() {
    if ( this._topIndex === -1 ) { return null }
    let result = this._storage[ this._topIndex ]
    delete this._storage[ this._topIndex-- ]
    return result
  }
}
