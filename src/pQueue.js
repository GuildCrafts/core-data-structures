'use strict'

export default class PriorityQueue {
  constructor(initialValues = []) {
    this.elements = initialValues
  }

  enqueue(value, priority) {
    this.elements[this.elements.length] = [value, priority]
  }

  front() {
    if (this.elements.length){
      let highest = this.elements[0]
      for(let pair of this.elements) {
        if (pair[1] > highest[1]) {
          highest = pair
        }
      }
      return highest
    }
    return null
  }

  back() {
    if (this.elements.length){
      let lowest = this.elements[0]
      for(let pair of this.elements) {
        if (pair[1] < lowest[1]) {
          lowest = pair
        }
      }
      return lowest
    }
    return null
  }

  dequeue() {
    if (this.elements.length){
      let highest = this.elements[0]
      for(let pair of this.elements) {
        if (pair[1] > highest[1]) {
          highest = pair
        }
      }
      this.elements.splice(this.elements.indexOf(highest),1)
      return highest
    }
    return null
  }

  isEmpty() {
    if (this.elements.length){
      return false
    }
    return true
  }

  length() {
    let count = 0
    for (let key in this.elements) {
        count++
    }
    return count
  }

}
