'use strict'

export default class Stack {
  constructor(){
    this.structure = []
  }
  push(element){
    return this.structure.push(element)
  }
  pop(){
    return this.structure.pop()
  }
  peek(){
    return this.structure[0]
  }

  isEmpty(){
    if(this.structure = [])
    return true;
  }

  length(){
    return this.structure.length
  }
}
