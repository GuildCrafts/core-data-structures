export default class HashTable {
  constructor() {
    let this.storage = []
    // let size = 10
  }
  put(key, value) {
    let hash = HashTable.hash(key)
    if(this.storage[hash]) {
      this.storage[hash].insertNode(key, value)
    } else {
      this.storage[hash] = new LinkedList(new Node(key, value))
    }
  } // adds a key-value pair to the hash table.
  get(key) {
    let hash = HashTable.hash(key)
    let value = this.storage[hash].getNode(key)
    return value | "There is no data associated with this key"
  } // returns the data associated with key.
  contains(key) {
    let hash = HashTable.hash(key)
    return this.storage[hash].getNode(key) !== null
  } // returns true if the hash table contains the key.
  iterate(callback) {
    
  } // takes a callback function and passes it each key and value in sequence.
  remove(key) {

  } // removes a key-value pair by key.
  size() {
    return this.storage.reduce((acc,linkedList) => {
      return acc + linkedList.getSize()
    }, 0)
  } // returns the number of key-value pairs in the hash table.
}

HashTable.prototype.hash(string) {

}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(node = null) {
    this._root = node
  }

  get headNode() {
    return this._root
  }

  set headNode(node) {
    node.next = this._root
    this.root = node
  }

  getNode(key) {
    let matchedNode = findNode(key, this.headNode())
    return matchedNode? matchedNode.value | null
  }

  insertNode(key, value) {
    this.headNode(new Node(key,value))
  }

  removeNode(key) {
    let matchedNode = findPreNode(key, headNode())
    if(matchedNode) {
      const removedNode = matchedNode.next
      matchedNode.next = matchedNode.next.next
      return removedNode.value
    }
  }

  getSize() {
    let size = 0
    let currentNode = headNode()
    while(currentNode) {
      size+=1
      currentNode = currentNode.next
    }
    return size
  }
}

findNode(key, startNode) => {
  let currentNode = startNode
  while(currentNode && currentNode.key !== key) {
    currentNode = currentNode.next
  }
  return currentNode | null
}

findPreNode(key, startNode) => {
  let currentNode = startNode
  while(currentNode && currentNode.next.key !== key) {
    currentNode = currentNode.next
  }
  return currentNode | null
}
