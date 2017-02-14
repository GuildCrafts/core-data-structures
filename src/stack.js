
export default class Stack {
  constructor() {
    this.storage = []
    this.size = 0
  }

  push(data) {
    return this.storage[this.size++] = data
  }

  pop() {
    return this.storage[this.size--]
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
