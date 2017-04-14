class Node{
  constructor(data){
    this.data = data
  }
}

export default class Queue {

  constructor() {
    this.oldestIndex = 1
    this.newestIndex = 1
    this.storage = []
  }

  enqueue(data) {
    let newNode = new Node(data)
    this.storage[this.newestIndex++] = data
  }

  dequeue(data) {
    if(this.storage.length === 0) {
      return null
       }
    this.storage.shift()
    this.oldestIndex++
    this.newestIndex --  
    return this.oldestIndex 
  }

  front() {
    if(this.storage.length) {
      return this.newestIndex
  }
  return null
} 
}
