'use strict'

export default class Stack {

  push(element) {
    return this.arr.push(element)
  }

  pop() {
  	return this.arr.pop()
  }

  length() {
  	return this.arr.length()
  }
}

// class Stack {
//   constructor() {
//   	this.arr = new Array()
//   }

//   push(element) {
//     return this.arr.push(element)
//   }

//   pop() {
//   	return this.arr.pop()
//   }

//   length() {
//   	return this.arr.length()
//   }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(11)
// stack.push(12)
// console.log(stack.length())

// export default Stack