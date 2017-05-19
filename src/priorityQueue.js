export default class PriorityQueue {
  constructor() {
    this.dataStore = []
    this.newIndex = 0
  }

  enqueue(element, number) {
    this.dataStore[this.newIndex++] = {
      element,
      number
    }
    return this.dataStore.sort(function(a, b) {
      return parseFloat(b.number) - parseFloat(a.number)
    })
  }

  dequeue() {
    this.newIndex--
    return this.dataStore.shift() || null
  }


  length() {
    return this.newIndex
  }

}
