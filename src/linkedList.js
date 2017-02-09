export class Node {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  getHeadNode = () => {
    let node = this.head.data
    return node
  }

  // getHeadNode = () => {
  //   return this.head.data
  // }

  getTailNode = () => {
    let node = this.tail.data
    return node
  }

  // getTailNode = () => {
  //   return this.tail.data
  // }

  contains = (value) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  find = (value) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === value) {
        return currentNode.data
      }
      else {
        currentNode = currentNode.next
      }
    }
    return -1
  }

  insert = (value) => {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
  }

  insertFirst = (value) => {
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.length += 1
  }

  insertBefore = (beforeNode, newNode) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    while(currentNode.next != null){
      if(currentNode.next.data  === beforeNode){
        const node = new Node(newNode)
        node.next = currentNode.next
        currentNode.next = node
        this.length +=1
        return
      }
      currentNode = currentNode.next
    }
    return "Before node not found"
  }

  insertAfter = (afterNode, newNode) => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    while(currentNode.next != null){
      // console.log('while statement***************************')
      if(currentNode.data  === afterNode){
        //console.log("we have reached the if statement**********")
        const node = new Node(newNode)
        node.next = currentNode.next
        currentNode.next = node
        this.length +=1
        return
      }
      currentNode = currentNode.next
    }
    return "After node not found"
  }

  remove = () => {
    if (this.isEmpty()) return null
    let currentNode = this.head
    while(currentNode != null){
      if(currentNode.next.next === null){
        currentNode = this.tail
        currentNode.next = null
        this.length -= 1
        return
      }
      currentNode = currentNode.next
    }
  }

    removeFirst = () => {
      if (this.isEmpty()) return null
      const node = this.head
      this.head = node.next
      node.next = null
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
