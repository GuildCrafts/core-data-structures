'use strict'

export default class Stack {
  const stack = new Stack()

//stack.push("foo") // push an element (the string "foo") to the top of the stack.
  const push = function(arr, x){
    if (typeof x === String){
      return x.split()
    }
    return arr.concat(x)
  }

//stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
  const pop = function(arr){
    var poppedArr = arr.splice(arr.length-1, 1)
    if (arr.length === 0){
      return null
    } return poppedArr
  }



}

//const stack = new Stack()
//stack.peek()      // returns the top element in the stack or null if the stack is empty.
//stack.isEmpty()   // returns true if the stack is empty or false if not.
//stack.length()    // returns the number of elements in the stack.
