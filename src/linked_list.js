class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this._length = 0
  }

  getHeadNode() {
    return this.head.data
  }

  getTailNode() {
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  find(position) {
    let currentNode = this.head
    let message = {failure: "This node does not exist"}
    let count = 1

    if (this._length === 0 || position < 1 || position > this._length) {
      throw new Error(message.failure);
    }
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  insert(data) {
    let node = new Node(data)
    if(!this.head) {
      this.head = node
      this._length += 1
      return node
    }
    let currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this._length += 1
    return node
  }

  insertBefore(data, newData) {
    let currentNode = this.head
    let insertedNode
    while ( (currentNode !== null) && (insertedNode == undefined) ) {
     if(JSON.stringify(currentNode.next.data) === JSON.stringify(data)) {
       insertedNode = new Node( newData )
       insertedNode.next = currentNode.next
       currentNode.next = insertedNode
     }
     if( (currentNode === this.head) && (currentNode.data === data) ) {
       insertedNode = new Node( newData )
       insertedNode.next = currentNode
       this.head = insertedNode
     }
    }
    this._length += 1
    return insertedNode
  }

  insertAfter(data, newData) {
    let node = new Node( newData )
    let currentNode = this.head

    while( currentNode.next ) {
      if( currentNode.data === data ) {
        node.next = currentNode.next
        currentNode.next = node
        return node
      }
      currentNode.next = node
    }
  }

  removeFirst() {
    let currentNode = this.head
    this.head = currentNode.next
    currentNode = null
    this._length--
  }

  remove(position) {
    let currentNode = this.head
    let count = 0
    let message = {failure: 'Failure: non-existent node in this list.'}
    let beforeNodeToDelete = null
    let nodeToDelete = null
    let deletedNode = null

    if( position < 0 || position > this._length ) {
      throw new Error(message.failure)

    }
    while (count < position) {
      beforeNodeToDelete = currentNode
      nodeToDelete = currentNode.next
      count++
    }
    beforeNodeToDelete.next = nodeToDelete.next
    deletedNode = nodeToDelete
    nodeToDelete = null
    this._length--

    return deletedNode
  }

  size() {
    return this._length
  }

  isEmpty() {
    if(!this.head) {
      return true
    }
    return false
  }

  clear() {
    this.head = null
    this._length = 0
    this.data = null
  }

}

export default LinkedList