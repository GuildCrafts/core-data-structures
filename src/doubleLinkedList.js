class Node {
  constructor( data, next, prev ){
    this.data = data
    this.next = null
    this.prev = null
  }
}

export default class doubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.index = 0
  }

  insert(data) {
    const node = new Node(data)
    let currentNode = this.head
    let previousNodeData = null


    if(!currentNode){
      this.head = node
      this.tail = node
      this.index++
      return node
    }

    while(currentNode.next) {
        currentNode = currentNode.next
    }
    currentNode.next = node
    node.prev = currentNode.data
    this.tail = node

    this.index++
    return node

  }

  find(target) {
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

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
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

  insertFirst(data){
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.index++
      return node
    }
    node.next = this.head
    this.head.prev = node.data
    this.head = node
    this.index++
    return node
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
    node.prev = currentNode
    return node
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
    node.prev = currentNode
    return node
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
    this.head.prev = null
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
