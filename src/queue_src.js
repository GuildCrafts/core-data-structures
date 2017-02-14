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
    return this.dataStore.shift()
  }

  length() {
  return this.newIndex - this.oldIndex
  }
}
