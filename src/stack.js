'use strict'

export default class Stack {
  constructor(){
    this.storage = []
  }

  push(element){
    return this.storage.push(element)
  }

  length(){
    return this.storage.length
  }

  pop(){
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage.pop()
    }
  }

  peek() {
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage[this.storage.length-1] 
    }
  }

  isEmpty() {
    if(this.storage.length === 0) {
      return true
    } else {
      return false 
    }
  }
}
