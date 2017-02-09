export class Node {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  enqueue = (value) => {
    const node = new Node(value)
    if (this.size !== 0) {
      this.tail.next = node
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
    this.head = node.next
    node.next = null
    this.size -= 1
    return node.data
  }

  front = () => this.isEmpty() ? null : this.head.data

  back = () => this.isEmpty() ? null : this.tail.data

  isEmpty = () => this.size === 0

  length = () => this.size

}
