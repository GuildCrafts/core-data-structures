export default class Stack {
  constructor() {
    this.size = 0
    this.elements = []
  }

  push = (elementToAdd)  => {
    this.elementToAdd = elementToAdd
    this.size += 1
    this.elements.push(elementToAdd)
  }

  pop = () => {
    if (this.size == 0) {
      return null
    }
    else {
      this.size -= 1
      this.elements.pop()
    }
  }

  peek = () => {
    if (this.size == 0) {
      return null
    }
    else {
      return this.elements[this.size - 1 ]
    }
  }

  isEmpty = () => {
    if (this.size == 0){
      return true
    }
    return false
  }

  length = () => {
    return this.size
  }
}
