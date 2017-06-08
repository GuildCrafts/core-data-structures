export default class Stack {
  constructor() {
    this.storage = []
  }

  push(item) {
    this.storage[this.storage.length] = item
  }

  pop() {
    if(this.isEmpty() === true){
      return null
    }
    return this.storage[this.length() - 1]
  }

  peek(){
    if(this.length() === 0) {
      return null
    } else {
      return this.storage[0]
    }
  }

  isEmpty(){
    if(this.length() === 0) {
      return true
    }
  }

  length() {
    let elements = 0
    for(let key in this.storage) {
      elements++
    }
    return elements
  }

}
