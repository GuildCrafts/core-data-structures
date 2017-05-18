import Node from '../src/node'
import LinkedList from '../src/linkedlist'

'use strict'

// The classic LIFO (Last-In-First-Out) one-dimensional list.
export default class Stack {
  constructor(){
      this.container = []
      this.position = 0

  }

  length(){
      return this.position
  }

  push(item){
    this.container[this.position] = item
    this.position++
  }

  pop(){
    if (this.position === 0) {
          return null
    } else {
        this.position--
        return this.container[this.position]
      }
  }

  peek(){
      if ( !this.position ) {
         return null
      } else
        return this.container[this.position - 1]
  }

  isEmpty() {
    if ( !this.position) {
        return true
    }
  }

}
