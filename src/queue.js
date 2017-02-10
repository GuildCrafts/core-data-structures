import Node from './node'

export default class Queue {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  enqueue = (value) => {
    const node = new Node(value)
    if (this.size !== 0) {
      this.tail._next = node
      this.tail = node
    }
    else {
      this.head = node
      this.tail = node
    }

    this.size += 1
    return node
  }

  dequeue = () => {
    if (this.isEmpty()) return null
    const node = this.head
    this.head = node._next
    node._next = null
    this.size -= 1
    return node
  }

  front = () => this.isEmpty() ? null : this.head

  back = () => this.isEmpty() ? null : this.tail

  isEmpty = () => this.size === 0

  length = () => this.size

}
