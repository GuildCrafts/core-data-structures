export class Element {
  constructor(value, priorityInt) {
    this.data = value
    this.priority = priorityInt
  }
}

export default class PriorityQueue {
  constructor() {
    this.elements = []
    this.size = 0
  }

  enqueue(value, priorityInt) {
    const element = new Element(value, priorityInt)
    this.elements.push(element)
    this.size += 1
  }

  front = () => {
    if(this.size === 0) return null

    let priority = this.elements[0].priority
    let element = this.elements[0]

    for(let j = 1; j < this.size; j++){
      if(this.elements[j].priority < priority){
        priority = this.elements[j].priority
        element = this.elements[j]
      }
    }
    return element.data
  }

  back = () => {
    if(this.size === 0) return null

    let priority = this.elements[0].priority
    let element = this.elements[0]

    for(let j = 1; j < this.size; j++){
      if(this.elements[j].priority > priority){
        priority = this.elements[j].priority
        element = this.elements[j]
      }
    }
    return element.data
  }

  dequeue() {
    if (this.size === 0) return null
    let data = this.front()
    let element = this.elements[0]
    let index = 0

    for(let i = 0; i < this.size; i++) {
      if(this.elements[i].data === data) {
        index = i
        element = this.elements[i]
      }
    }

    this.elements.splice(index, 1)
    this.size -= 1
    return data
  }

  isEmpty = () => this.size === 0

  length = () => this.size

}
