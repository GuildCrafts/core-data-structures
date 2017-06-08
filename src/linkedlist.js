import Node from './node'
export default class LinkedList {

  constructor() {
    this.head = null
    this.count = 0
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    let currentNode = this.head
    if(this.head === null) return
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
    this.count--
  }

  insert(data) {
    let nodeToInsert = new Node(data)
    let nodeToCheck = this.head

    if(nodeToCheck === null) {
      //if it is the first node then set it to the head
      this.head = nodeToInsert
      this.count++
      return nodeToInsert
    }

    while(nodeToCheck.next) {
      //loop through to find the end of the list
      nodeToCheck = nodeToCheck.next
    }
    //add the new node to the end of the list
    nodeToCheck.next = nodeToInsert
    this.count++
  }

  insertFirst(data) {
    const currentNode = new Node()
    if(!this.head) {
      this.head = currentNode
      return currentNode
    }
    let headNode = this.head
    currentNode.next = headNode
    this.head = currentNode

    return currentNode
  }

  insertBefore(data) {
    const insertBeforeNode = new Node(data)
    if(this.head === data || this.head.next === data) {
      this.head = insertBeforeNode
      this.count++
    }
  }

  insertAfter(data) {
    const insertAfterNode = new Node(data)
    if(this.head === data || this.tail === data) {
      this.head.next = insertAfterNode
      this.count++
    }
  }

  contains(data) {
    return this.find(data) !== -1
  }

  find(data) {
    let currentNode = this.head
    if(!data) {
      return -1
    }
    while(currentNode.next !== null) {
      currentNode = currentNode.next
      this.count++
    }
    return currentNode
  }

  remove() {
    let nodeToCheck = this.head
    if(this.count === 0) {
      this.head = nodeToCheck.next;
      this.count--

      return this.head
    }

    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next
      this.count++
    }

    nodeToCheck = null
    this.count--
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
