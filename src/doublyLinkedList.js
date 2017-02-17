function Node(data) {
  this.previous = null
  this.data = data
  this.next = null
}

export default class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  clear() {
    this.length = 0
    this.head = null
  }

  getHeadNode(data) {
    return this.head
  }

  removeFirst() {
    var node = new Node()
    var currentNode = this.head
    if (this.length === 0){
      return null
    } else {
      this.head = currentNode.next
      node = this.head
      node.previous = null
      this.length -= 1
    }
  }

  getTailNode(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  remove() {
    var node = new Node()
    var currentNode = this.head
    if (!currentNode) {
      return null
    } else if (!currentNode.next){
        return currentNode
    } else if (!currentNode.next.next){
      currentNode.next = null
      return this.length -= 1
    } else {
      while (currentNode.next.next){
        currentNode = currentNode.next
        currentNode.next = null
        return this.length -= 1
      }
    }
  }

  insert(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      this.length += 1
      return node
    } else if (!currentNode.next){
      node.previous = currentNode
      currentNode.next = node
      currentNode = currentNode.next
      this.length += 1
      return node
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      node.previous = currentNode
      currentNode.next = node
      currentNode = currentNode.next
      this.length += 1
      return node
    }
  }

  insertFirst(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      this.length += 1
      return node
    } else {
      currentNode.previous = node
      this.next = currentNode
      this.head = node
      node.next = currentNode
      this.length += 1
    }
  }

  find(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.data === data){
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    } return -1
  }

  contains(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.data === data){
        return true
      } else {
        currentNode = currentNode.next
      }
    } return false
  }

  insertBefore(searchTerm, data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      return this.length += 1
    } else {
      while (currentNode) {
        if (currentNode.next.data === searchTerm){
          node.next = currentNode.next
          node.previous = currentNode
          currentNode.next.previous = node
          currentNode.next = node
          return this.length += 1
        } else {
          return -1
        }
      }
    }
  }

  insertAfter(searchTerm, data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      return this.length += 1
    } else {
      while (currentNode) {
        if (currentNode.data === searchTerm){
          node.next = currentNode.next
          node.previous = currentNode
          currentNode.next.previous = node
          currentNode.next = node
          return this.length += 1
        } else {
          return -1
        }
      }
    }
  }

}
