class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  find(item) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === item) {
        return currentNode
      }else{
        currentNode = currentnode.next
      }
    }
    return -1
  }
}
