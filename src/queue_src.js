export default class Queue {
  constructor() {
    this.dataStore = []
    this.oldIndex = 1
    this.newIndex = 1
    this.size = 0
  }

  push(element) {
    this.storage[this.size++] = element
  }


  enqueue(element) {
    this.newIndex++
    return this.dataStore[this.newIndex] = element
  }

  dequeue(element) {
    this.newIndex--
    return this.dataStore[this.newIndex] = element
  }

  front() {
    return this.dataStore[0] || null
  }

  empty() {
    if(this.dataStore.length == 0) {
      return true
    } else {
      return false
    }
  }

  length() {
  return this.newIndex - this.oldIndex
  }

}
