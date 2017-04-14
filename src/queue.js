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
    let result = this.storage.shift()
    this.oldestIndex++
    return result 
  }

  front() {
    if(this.storage.length) {
      return this.storage[this.oldestIndex - 1]
    }
    return null
  } 

  back() {
    if(this.oldestIndex === this.newestIndex) {
      return null
    }
    return this.storage[this.newestIndex - 1]
   }
  isEmpty() {
    if(this.storage.length === 0) {
      return true
    }
    return false
  }

  length() {
   return this.storage.length
  }

}
