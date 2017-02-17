export default class Queue {
  constructor() {
    this.size = 0
    this.elements = []
  }

  enqueue(elementToAdd) {
    this.size += 1
    this.elements = [ ...this.elements, ...[elementToAdd] ]
    return this.elements
  }

  dequeue() {
    if (this.size === 0){
      return null
    } this.size -= 1
      return this.elements.splice(0, 1)[0]
  }

  front() {
    if (this.size === 0){
      return null
    } return this.elements[0]
  }


  back() {
    if (this.size === 0){
      return null
    } return this.elements[this.elements.length - 1]
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }

}
