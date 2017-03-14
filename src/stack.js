'use strict'

export default class Stack {
  // your code here
  constructor(data){
    this.stack = new Array();
  }

  length() {
    return this.stack.length
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



}
