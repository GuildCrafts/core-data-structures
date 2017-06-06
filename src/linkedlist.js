import Node from './node'
export default class LinkedList {

  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  insert(data) {
    const nodeToInsert = new Node(data)
    if(this.count === 0) {
      this.tail = nodeToInsert
      this.count++
      return
    }
    this.head = nodeToInsert
    this.count++
  }

  insertFirst(data) {
    const insertNode = new Node(data)
    this.head = insertNode
    this.count++
  }

  insertBefore(data) {
    const insertBeforeNode = new Node(data)
    if(this.head === data || this.tail === data) {
      this.head = insertBeforeNode
      this.count++
    }
  }

  insertAfter(data) {
    const insertAfterNode = new Node(data)
    if(this.head === data || this.tail === data) {
      this.tail = insertAfterNode
      this.count++
    }
  }

  contains(data) {
    if(this.head.data === data || this.tail.data === data)
    return true
  }

  find(data) {
    if(this.head === data) {
      return this.head
    }
    else if(this.tail === data) {
      return this.tail
    }
    return -1
  }

  remove(data) {
    if(this.tail === data) {
      this.tail = null
    }
  }
  removeFirst(data) {
    if(this.head === data) {
      this.head = null
    }
  }
  isEmpty() {
    if(this.count === 0) {
      return true
    }
  }

  size() {
  return this.count
  }

  clear() {
    this.head = null
    this.tail = null
    this.count = 0
  }
}
