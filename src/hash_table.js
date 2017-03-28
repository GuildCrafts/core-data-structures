export default class HashTable {
  constructor() {
    let this.size = 0
    let this.storageMax = 4
    let this.storage = []
  }
  put(key, value) {
    let hash = HashTable.hash(key) % storageMax

    if(this.storage[hash]) {
      this.storage[hash].insertNode(key, value)
    } else {
      this.storage[hash] = new Bucket(new Node(key, value))
    }

    this.size += 1
    if(this.size >= (this.storageMax*0.75)) {
      this.storageMax *= 2
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
    this.storage.map(linkedList => linkedList.map(callback))
  } // takes a callback function and passes it each key and value in sequence.
  remove(key) {
    let hash = HashTable.hash(key)
  } // removes a key-value pair by key.
  size() {
    return this.size
  } // returns the number of key-value pairs in the hash table.
}

HashTable.prototype.hash(string) {
  return hashFunction(string)
}

hashFunction(string) => {
  let hash = 0
  let char
  if(string.length === 0) {
    return hash
  }
  charArray = string.split('')
  charArray.forEach( (element) => {
    char = element.charCodeAt(0)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  })
  return hash
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

  get headNode() {
    return this.root
  }

  set headNode(node) {
    node.next = this.root
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
    let matchedNode = findPreNode(key, this.headNode())
    if(matchedNode) {
      const removedNode = matchedNode.next
      matchedNode.next = matchedNode.next.next
      return removedNode.value
    }
  }

  getSize() {
    let size = 0
    let currentNode = this.headNode()
    while(currentNode) {
      size += 1
      currentNode = currentNode.next
    }
    return size
  }

  map(callback) {
    let currentNode = this.headNode()
    while(currentNode) {
      callback(currentNode.key, currentNode.value)
      currentNode = currentNode.next
    }
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
