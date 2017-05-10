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
    return this.head
  }

  getTailNode() {
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode.data
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

  // insertBefore(data, newData) {
  //   let currentNode = this.head
  //   let insertedNode
  //   while ( (currentNode !== null) && (insertedNode == undefined) ) {
  //    if(JSON.stringify(currentNode.next.data) === JSON.stringify(data)) {
  //      insertedNode = new Node( newData )
  //      insertedNode.next = currentNode.next
  //      currentNode.next = insertedNode
  //    }
  //    if( (currentNode === this.head) && (currentNode.data === data) ) {
  //      insertedNode = new Node( newData )
  //      insertedNode.next = currentNode
  //      this.head = insertedNode
  //    }
  //   }
//     return insertedNode
  // }

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

// const ll = new LinkedList()
// ll.insert(11)
// ll.insert(12)
// ll.insert(13)
// ll.insert(14)
// ll.clear()
// console.log(ll.getHeadNode())


export default LinkedList