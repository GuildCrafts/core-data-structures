export default class Queue {
  constructor() {
    this._store = []
  }

  enqueue(element) {
    return this._store.unshift(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    return this._store.pop()
  }

  front() {
    if (this.isEmpty()) {
      return null
    }

    return this._store[this.length() - 1]
  }

  back() {
    if (this.isEmpty()) {
      return null
    }

    return this._store[0]
  }

  isEmpty() {
    return this.length() === 0
  }

  length() {
    return this._store.length
  }
}
