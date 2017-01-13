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
    if (this.isEmpty()) {
      return null
    }

    return this._store[this.length() - 1]
  }

  isEmpty() {
    return this.length() === 0
  }

  length() {
    return this._store.length
  }
}
