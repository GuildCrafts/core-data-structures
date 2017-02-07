export default class Stack {
  constructor() {
    this.size = 0
    this.elements = []
  }

  push = (elementToAdd) => {
    this.elementToAdd = elementToAdd
    this.size += 1
    this.elements.push(elementToAdd)
  }

  pop = () => {
    if (this.size == 0) return null
    else {
      this.size -= 1
      this.elements.pop()
    }
  }

  peek = () => this.size == 0 ? null : this.elements[this.size - 1 ]

  isEmpty = () => this.size === 0

  length = () => this.size
}
