'use strict'

export default class Stack {
  constructor(){
    this.arr = []
  }

  add(element) {
    return this.arr.push(element)
  }
}
