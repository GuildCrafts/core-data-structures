class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
  data() {return this.data}
  next() {return this.next}
}


export default class linkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.index = 0
  }

  insert(data){
    const node = new Node(data)
    let currentNode = this.head

    if (!currentNode) {
      this.head = node
      this.tail = node
      this.index++
      return
    }

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node
    this.tail = node

    this.index++
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  size() {
    return this.index
  }
  contains(target){
    let currentNode = this.head
    while (currentNode !== this.tail) {
      if( currentNode.data === target) {
        return true
      } else {
        currentNode = currentNode.next
      }
    }
    return currentNode.data === target ? true : false
  }
  find(target){
    let currentNode = this.head
    while (currentNode !== this.tail) {
      if( currentNode.data === target) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return currentNode.data === target ? currentNode : -1
  }

  insertFirst(data){
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.index++
    }
    node.next = this.head
    this.head = node
    this.index++
  }

  insertAfter(location, data){
    const node = new Node(data)
    let currentNode = this.head
    while(currentNode.data !== location){
      currentNode = currentNode.next
    }
    let nextNode = currentNode.next
    currentNode.next = node
    node.next = nextNode
  }

  insertBefore(location, data){
    const node = new Node(data)
    let currentNode = this.head
    while(currentNode.next.data !== location){
      currentNode = currentNode.next
    }
    let nextNode = currentNode.next
    currentNode.next = node
    node.next = nextNode
  }
  remove(){
    let currentNode = this.head
    while(currentNode.next.next !== null){
    currentNode = currentNode.next
    }
    this.tail = currentNode
    currentNode.next = null
    this.index--
  }

  removeFirst(){
    this.head = this.head.next
    this.index--
  }

  isEmpty(){
    return this.index === 0
  }
  size(){
    return this.index
  }
  clear(){
    this.head = null
    this.tail = null
    this.index = 0
  }
}
