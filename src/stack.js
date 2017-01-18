'use strict'

export default class Stack {
  // your code here
  // always add and remove to the back of the array
  // let stack = [];
  // to push data
  // stack.push(a)
  // stack.push(b)
  constructor(){
    this.arr = []
  }

  add(element) {
    this.arr.push(element)
  }

  remove(){
    this.arr.pop(element)
  }

  peek() {
    if(this.arr.length > 0){
      return this.arr[length-1];
    } else {
      return null;
    }
  }

  isEmpty(){
    return this.arr.length > 0
  }

  size(){
    return this.arr.length
  }

}
