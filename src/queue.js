'use strict'

export default class Queue {
  constructor() {
    this.storage = []
  }

  enqueue(element) {
    return this.storage.push(element)
  }

  length() {
    return this.storage.length
  }

  dequeue() {
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage.pop(this.storage.length-1)
    }
  }

  front() {
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage[this.storage.length-1]
    }
  }

  back() {
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage[0]
    }
  }

  isEmpty(){
    if(this.storage.length === 0){
      return true
    }
    else{
      return false
    }
  }

}
