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
    return currentNode
  }

  insert(data) {
    let node = new Node(data)
    if(!this.head) {
      this.head = node
    }
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this._length += 1
    return node
  }

  size() {
    return this._length
  }

}

const ll = new LinkedList()
ll.insert(15)
console.log(ll.size())
console.log(ll)

// export default LinkedList