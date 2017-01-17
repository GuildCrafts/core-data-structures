'use strict'

export default class Stack {
  // your code here
  // always add and remove to the back of the array
  // let stack = [];
  // to push data
  // stack.push(a)
  // stack.push(b)
  constructor(size, arr){
    this.size = 0
    this.arr = []
  }

    add(element) {
      this.arr.push(element)
    }

    remove(element){
      this.arr.pop(element)
    }

    peek(arr) {
      if(this.arr.length > 0){
        return this.arr[length-1];
      } else {
        return null;
      }
    }

  isEmpty(arr){
    return this.arr.length > 0
  }

  size(arr){
    return this.arr.length
  }

}
