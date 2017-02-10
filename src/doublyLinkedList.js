import Node from './node'

export default class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  getHeadNode = () => {
    let node = this.head
    return node
  }

  getTailNode = () => {
    let node = this.tail
    return node
  }

  contains = (value) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (currentNode._value === value) {
        return true
      }
      currentNode = currentNode._next
    }
    return false
  }

  find = (value) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (currentNode._value === value) {
        return currentNode
      }
      else {
        currentNode = currentNode._next
      }
    }
    return -1
  }

  insert = (value) => {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.head._prev = null
      this.tail = node
    }
    else {
      node._prev = this.tail
      this.tail._next = node
      this.tail = node
    }
    this.length += 1
  }

  insertFirst = (value) => {
    const node = new Node(value)
    node._prev = null
    node._next = this.head
    this.head = node
    this.length += 1
  }

  insertBefore = (beforeNode, newNode) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    while(currentNode._next != null){
      if(currentNode._next._value === beforeNode){
        const node = new Node(newNode)
        node._prev = currentNode
        currentNode.next._prev = node
        node._next = beforeNode
        currentNode._next = node
        this.length +=1
        return
      }
      currentNode = currentNode._next
    }
    return "Before node not found"
  }

  insertAfter = (afterNode, newNode) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    while(currentNode._next != null){
      if(currentNode._value  === afterNode){
        const node = new Node(newNode)
        node._prev = currentNode
        currentNode._next._prev = node
        node._next = currentNode._next
        currentNode._next = node
        this.length +=1
        return
      }
      currentNode = currentNode._next
    }
    return "After node not found"
  }

  remove = () => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    while(currentNode != null){
      if(currentNode._next === this.tail){
        this.tail._prev = null
        this.tail = currentNode
        currentNode._next = null
        this.length -= 1
        return
      }
      currentNode = currentNode._next
    }
  }

    removeFirst = () => {
      if (this.isEmpty()) return null
      const node = this.head
      this.head = node._next
      this.head._prev = null
      node._next = null
      this.length -= 1
    }

  isEmpty = () => this.length === 0

  size = () => this.length

  clear = () => {
    this.head = null
    this.tail = null
    this.length = 0
  }
}
