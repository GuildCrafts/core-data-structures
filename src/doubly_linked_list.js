class Node {
  constructor(data, prev, next) {
  this.data = data
  this.next = next || null
  this.prev = prev || null
  }
}

const DoublyLinkedList = class {
  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

 getHeadNode() { return this.head.data }

  getTailNode() {
    let currentNode = this.head
    while( currentNode.next ) {
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  insert(data) {
    let node = new Node(data)
    let currentNode = this.head 
    if(currentNode === null) {
      this.head = node
      return node
    }
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    node.prev = currentNode 
    currentNode.next = node
    this.tail = node
    this._length++
    return node
  }

  insertFirst(value) {
    let node = new Node(value)
    if(!this.head) {
    this.head = node
    this._length++

    return node
    }
    let currentNode = this.head
    node.next = currentNode
    this.head = node

    return node
  }

  insertBefore(data, newData) {
    let currentNode = this.head
    let insertedNode
    while( (currentNode !== null) && (insertedNode === undefined) ) {
      if(currentNode.next !== null) {
        if( currentNode.next.data === data ){
          insertedNode = new Node( newData )
          insertedNode.next = currentNode.next
          currentNode.next = insertedNode
          insertedNode.prev = currentNode
        }
      }
      if( (currentNode === this.head) && (currentNode.data === data) ) {
        insertedNode = new Node( newData )
        insertedNode.next = currentNode
        currentNode.prev = insertedNode
        this.head = insertedNode
      }
      currentNode = currentNode.next
    }
    return insertedNode
  }

  insertAfter(data, newData) {
    let insertedNode = new Node( newData )
    let currentNode = this.head

    while( currentNode ) {
      if( currentNode.data === data ){
        insertedNode.next = currentNode.next
        insertedNode.prev = currentNode
        currentNode.next = insertedNode

        if( currentNode === this.tail ){
          this.tail = insertedNode
        }
      }
      currentNode = currentNode.next
    }
    return insertedNode 
  }
  
  find(position) {
    let currentNode = this.head
    let length = this._length
    let count = 1

    if(length === 0 || position < 1 || position > length) {
      throw new Error("This node position does not exist in this list.")
    }

    while(count < position) {
      currentNode = currentNode.next
      count++
    }
    return currentNode.data
  }

  remove() {
    this.tail = this.tail.prev
    this.tail.next = null
  }

  removeFirst() {
    let currentNode = this.head

    this.head = currentNode.next
    this._length--
  }

  isEmpty() {
    return this._length === 0
  }

  size() {
    return this._length
  }

  clear() {
    this._length = 0
    this.head = null
    this.tail = null
  }

}

export default DoublyLinkedList