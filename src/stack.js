'use strict'

export default class Stack {
  constructor(){
    this.stack = []
  }

  push(newOne){
    this.stack.push(newOne)
  }

  pop(){
    const result = this.stack.splice(this.stack.length-1)[0]

    return result || null
  }

  peek(){
    let lastIndex = this.stack.length - 1

    return this.stack[lastIndex] || null
  }

  isEmpty(){
    return (this.stack.length === 0)
  }

  length(){
    return this.stack.length
  }
}
