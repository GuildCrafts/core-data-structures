import Node from './node'
export default class Queue {

  constructor() {
    this.front = null
    this.back = null
    this.count = 0
  }

  enqueue() {
   const node = new Node()
   this.back = node
  }

  front() {
    return this.front
  }

  back() {
    return this.back
  }
}
