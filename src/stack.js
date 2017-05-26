'use strict'

import Node from '../src/node'
export default class Stack {
  constructor(data){
      this.top = null
      this.size = 0

  }

  push(data){
    this.size ++
    let newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode

  }

  pop(){
    this.size --
    this.top = this.top.next

  }

  peek(){
    return this.top

  }

  isEmpty(){
    if(this.top === null){
      return true
    }
    return false
  }

  length(){
    return this.size
  }
}
