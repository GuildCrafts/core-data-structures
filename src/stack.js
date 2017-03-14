'use strict'

export default class Stack {
  // your code here
  constructor(data){
    this.stack = new Array();
  }

  push(data) {
    this.stack.push(data);

  }

  pop() {
    if(this.length()=== 0){
      return null
    }
    this.stack.pop()
  }

  peek() {
    if(this.length()===0){
      return null
    }
    return this.stack[0]
  }

  isEmpty(){
    if (this.length()===0){
      return true
    }
    return false
  }

  length() {
    return this.stack.length
  }



}
