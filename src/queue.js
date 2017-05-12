class Queue {
  constructor(capacity) {
    this._capacity = capacity || Infinity
    this._storage = {}
    this._head = 0
    this._tail = 0
  }

  enqueue(value) {
    if (this.length() < this._capacity) {
      this._storage[this._tail++] = value
      return this.length()
    }
    return 'Max capacity reached. Remove element before adding one'
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    let element = this._storage[this._head]
    delete this._storage[this._head]
    if (this._head < this._tail) this._head++
    return element
  }

  length() {
    return this._tail - this._head
  }

  front() {
    if (this.isEmpty()) {
      return null
    }
    return this._storage[0]
  }

  back() {
    if (this.isEmpty()) {
      return null
    }
    return this._storage[Object.keys(this._storage)[Object.keys(this._storage).length - 1]]
  }

  isEmpty() {
    for(var prop in this._storage) {
      if(this._storage.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

}

export default Queue