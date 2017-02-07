export class Node {
  constructor(value) {
    this.data = value
    this.previous = null
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)
      if (this.length) {
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
      }
      else {
        this.head = node
        this.tail = node
      }

      this.length += 1

      return node
  }

  dequeue() {
    
  }

  length() {
    return this.length
  }

}
