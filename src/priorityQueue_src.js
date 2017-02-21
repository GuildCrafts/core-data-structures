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
      return parseInt(b.number) - parseInt(a.number)
    })
  }

  dequeue() {
    this.newIndex--
    return this.dataStore.shift() || null
  }

  front() {
    return this.dataStore[0]
  }


  length() {
    return this.newIndex
  }

}
