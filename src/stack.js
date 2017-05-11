class Stack {
  constructor() {
    this.storage = ""
    this._length = 0
  }

  push(value) {
    this.storage = this.storage.concat("***", value)
    this._length++
  }

  pop() {
    let str = this.storage.slice(this.storage.lastIndexOf('***') + 3)
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'))
    this._length--
    return str
  }

  size() {
    return this._length
  }

  // peek() {
  //   return this.storage.charAt(3)
  // }

  isEmpty() {
    if (this._length == 0) {
      return true
    }
    return false
  }

  length() {
    return this._length
  }
}

// const stack = new Stack()
// stack.push("RedBeans")
// console.log(stack.length())

export default Stack