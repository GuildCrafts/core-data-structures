class Stack {
  constructor() {
    this.storage = {}
    this._count = 0;
  }

  push(value) {
    this.storage[this._count] = value
    this._count++
  }

  pop() {
    let value = this.storage[--this._count]
    delete this.storage[this._count]
    if (this._count < 0) {
      this._count = 0
    }
    return value
  }

  peek() {
    return this.storage[this._count-1]
  }

  size() {
    return this._count
  }

}

export default Stack