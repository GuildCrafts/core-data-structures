'use strict'

export default class Stack {
  constructor() {
    this._store = []
  }

  push(element) {
    return this._store.push(element)
  }

  pop() {
    return this._store.pop()
  }

  peek() {
    const length = this.length()

    if (length === 0) {
      return null
    }

    return this._store[length - 1]
  }

  isEmpty() {
    return this.length() === 0
  }

  length() {
    return this._store.length
  }
}
