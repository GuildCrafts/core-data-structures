export default class Queue {
  constructor() {
    this.dataStore = []
    this.newIndex = 0

  }

  enqueue(element) {
    this.dataStore[this.newIndex++] = element
  }

  dequeue() {
    this.newIndex--
    return this.dataStore.shift() || null

  }

  front() {
    return this.dataStore[0] || null
  }

  back() {
    return this.dataStore[this.dataStore.length -1] || null
  }

  empty() {
    if(this.dataStore.length === 0) {
      return true
    } else {
      return false
    }
  }

  length() {
  return this.newIndex
  }

}
