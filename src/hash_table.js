export default class HashTable {
  constructor() {
    this.currentSize = 0
    this.storageMax = 4
    this.storage = []
  }
  put(key, value) {
    let hash = HashTable.hash(key) % this.storageMax

    if(this.storage[hash]) {
      this.storage[hash].insertNode(key, value)
    } else {
      this.storage[hash] = new Bucket(new Node(key, value))
    }

    this.currentSize += 1
    // if(this.currentSize / this.storageMax >= 0.75) {
    //   this.storageMax *= 2
    // } TODO: fix resizing
  } // adds a key-value pair to the hash table.
  get(key) {
    let hash = HashTable.hash(key) % this.storageMax
    let value = this.storage[hash].getNode(key)
    return value || "There is no data associated with this key"
  } // returns the data associated with key.
  contains(key) {
    let hash = HashTable.hash(key) % this.storageMax
    return this.storage[hash]? this.storage[hash].getNode(key) !== null : false
  } // returns true if the hash table contains the key.
  iterate(callback) {
    this.storage.forEach(linkedList => linkedList.map(callback))
  } // takes a callback function and passes it each key and value in sequence.
  remove(key) {
    let hash = HashTable.hash(key) % this.storageMax
    this.storage[hash].removeNode(key)
    this.currentSize -= 1
    //TODO: resize down by half when utilization drops below 25%
  } // removes a key-value pair by key.
  size() {
    return this.currentSize
  } // returns the number of key-value pairs in the hash table.
}

let hashFunction = (string) => {
  let hash = 0
  let char
  if(string.length === 0) {
    return hash
  }
  let charArray = string.split('')
  charArray.forEach( (element) => {
    char = element.charCodeAt(0)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  })
  return hash
}

HashTable.hash = (string) => {
  return hashFunction(string)
}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class Bucket {
  constructor(node = null) {
    this.root = node
  }

  getHeadNode() {
    return this.root
  }

  setHeadNode(node) {
    node.next = this.root
    this.root = node
  }

  getNode(key) {
    let matchedNode = findNode(key, this.getHeadNode())
    return matchedNode ? matchedNode.value : null
  }

  insertNode(key, value) {
    this.setHeadNode(new Node(key,value))
  }

  removeNode(key) {
    let matchedNode = findPreNode(key, this.getHeadNode())
    if(matchedNode) {
      matchedNode.next = matchedNode.next? matchedNode.next.next : null
    }
  }

  getSize() {
    let size = 0
    let currentNode = this.getHeadNode()
    while(currentNode) {
      size += 1
      currentNode = currentNode.next
    }
    return size
  }

  map(callback) {
    let currentNode = this.getHeadNode()
    while(currentNode) {
      callback(currentNode.key, currentNode.value)
      currentNode = currentNode.next
    }
  }
}

let findNode = (key, startNode) => {
  let currentNode = startNode
  while(currentNode && currentNode.key !== key) {
    currentNode = currentNode.next
  }
  return currentNode
}

let findPreNode = (key, startNode) => {
  let currentNode = startNode
  while(currentNode.next && currentNode.next.key !== key) {
    currentNode = currentNode.next
  }
  return currentNode
}
