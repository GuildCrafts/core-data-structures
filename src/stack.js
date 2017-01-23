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
    return this.storage.pop()
  }
}
