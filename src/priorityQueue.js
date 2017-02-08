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
    let element = this.elements.front()
    this.elements.pop(element)
    return element
  }

  // isEmpty = () => this.size === 0
  //
   length = () => this.size

}
