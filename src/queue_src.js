export default class Queue {
  constructor() {
    this.dataStore = []
    this.oldIndex = 1
    this.newIndex = 1

  }

  enqueue(element) {
    this.newIndex++
    return this.dataStore[this.newIndex] = element
  }

  dequeue() {
    this.newIndex--
    return this.dataStore.shift()
  }

  front() {
    return this.dataStore[0] || null
  }

  back() {
    return this.dataStore[this.dataStore.length -1] || null
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
