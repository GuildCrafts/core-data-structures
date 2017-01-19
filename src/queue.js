'use strict'

export default class Queue {
  constructor(initialValues=[]) {
    this.elements = initialValues
  }

  enqueue(value) {
    this.elements[this.elements.length] = value
  }

  dequeue() {
    if(this.elements.length === 0 ){
      return null
    }
    let result = this.elements.slice(0, 1)
    this.elements.splice(0,1)
    return result
  }

  front() {
    if(this.elements.length){
      return this.elements[0]
    }

    return null
  }

  back() {
    if(this.elements.length){
      return this.elements.slice(-1)[0]
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
