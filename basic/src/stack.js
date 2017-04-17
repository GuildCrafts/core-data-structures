export default class Stack {
  constructor() {
    this.size = 0
    this.elements = []
  }

  length() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  push(elementToAdd) {
    this.elementToAdd = elementToAdd
    this.size += 1
    return this.elements = this.elements.concat(elementToAdd)
  }


  pop() {
    if (this.size === 0){
      return null
    }
    this.size -= 1
    return this.elements.splice(this.elements.length - 1, 1)
  }

  peek() {
    if (this.elements.length === 0){
      return null
    }
    return this.elements[this.elements.length - 1]
  }

}
