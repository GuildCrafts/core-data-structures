import Node from '../src/node'
export default class LinkedList {
  constructor(data) {
    this.count = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    if (!this) {
      return null
    }
    return this.head
  }

  getTailNode() {
    if (!this) {
      return null
    }
    return this.tail
  }

  find(item) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === item) {
        return true
      } else {
        currentNode = currentNode.next
      }
    }
    return false
  }

  clear() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  insert(item) {
      let newNode = new Node(item)

      if (this.head === null) {
        this.head = newNode
      } else {
        this.tail.next = newNode
      }
      this.tail = newNode
      this.count++

      return newNode
    }

  insertFirst(item) {
    let newNode = new Node(item)

    if (this.head) {
      newNode.next = this.head
    } else {
      this.tail = newNode
    }

    this.head = newNode
    this.count++

    return newNode

  }

  insertBefore(item, data) {
    let newNode = new Node(data)
    node.next = this.find(item)

    if(node.next === this.getHeadNode())
    while(currentNode.next !== node.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this.count++

  }

  insertAfter(item, data) {
   let node = new Node(data)
   if (this.find(item) === this.getTailNode()) {
   this.tail = node
   }
   node.next = this.find(item).next
   this.find(item).next = node
   this.count++

 }

 remove() {
   if (this.count === 1) {
     this.clear()
   } else {
     let currentNode = this.getHeadNode()
     while (currentNode.next.next) {
       currentNode = currentNode.next
     }
     currentNode.next = null
     this.count--
     this.tail = currentNode
   }

 }

  removeFirst() {
    if (this.count === 1) {
      this.clear()
    } else {
      this.head = this.getHeadNode().next
      this.count--
    }

  }

  isEmpty() {
    if(!this.head){
      return null
    } else {
      return this.data
    }
  }

  size() {
    return this.count
  }

  contains(item) {
    return this.find(item) !== -1
  }

}
