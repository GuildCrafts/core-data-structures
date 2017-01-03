'use strict'

export default class Stack {
  constructor(){
    this.size = 0
    this.value = [ ]
  }

  push(element){
    this.value.unshift(element)
    this.size++
  }

  pop(){
    return this.value.pop()
  }

  peek(){
    return this.value[0]
  }

  isEmpty(){
    return (this.size === 0)
  }

  length(){
    return this.size
  }
}
