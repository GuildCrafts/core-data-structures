class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  insert(value) {
    var node = new Node(value);

    if (this._length) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    } else {
        this.head = node
        this.tail = node
    }
    this._length++
    return node
  }

  find(position) {
    let currentNode = this.head
    let length = this._length
    let count = 1
    let message = {failure: 'Non-existent node in this list.'}

    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure)
    }
    while (count < position) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  remove(position) {
    let currentNode = this.head
    let length = this._length
    let count = 1
    let message = {failure: 'Failure: non-existent node in this list.'}
    let beforeNodeToDelete = null
    let nodeToDelete = null
    let deletedNode = null

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure)
    }

    if (position === this._length) {
        this.tail = this.tail.previous
        this.tail.next = null
    } else {
      while (count < position) {
          currentNode = currentNode.next
          count++
      }
      beforeNodeToDelete = currentNode.previous
      nodeToDelete = currentNode
      afterNodeToDelete = currentNode.next

      beforeNodeToDelete.next = afterNodeToDelete
      afterNodeToDelete.previous = beforeNodeToDelete
      deletedNode = nodeToDelete
      nodeToDelete = null
    }
    this._length--
    return message.success
  }

  // removeFirst(position) {
  //   if (position === 1) {
  //     this.head = currentNode.next;
  // }

  isEmpty() {
    if(!this.head) {
      return true
    }
    return false
  }

  clear() {
    this._length = 0
    this.head = null
    this.tail = null
  }

  size() {
    return this._length
  }

}

export default DoublyLinkedList
