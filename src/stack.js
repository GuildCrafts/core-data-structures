
export default class Stack {
  constructor() {
    this.storage = []
    this.size = 0
  }

  push(data) {
    return this.storage[this.size++] = data
  }

  pop() {
    if(this.storage.length > 0) {
      this.size--
      return this.storage.splice(this.size, 1)
    } else if(this.storage.length === 0) {
      return null
    }
  }

  peek() {
    return this.storage[this.size - 1] || null
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}
