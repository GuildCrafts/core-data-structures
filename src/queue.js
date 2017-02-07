export class Node {
  constructor(value) {
    this.data = value
    this.previous = null
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)
      if (this.size) {
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
      }
      else {
        this.head = node
        this.tail = node
      }

      this.size += 1
      return node
  }

  dequeue() {
    if (this.size === 0) return null
    const node = this.head
    this.head = node.next
    node.next = null
    this.head.previous = null
    this.size -= 1
    return node.data
    }

  front = () => this.size === 0 ? null : this.head.data

  back = () => this.size ===0 ? null : this.tail.data

  isEmpty = () => this.size === 0

  length = () => this.size

}
