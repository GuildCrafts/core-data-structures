export default class Stack {
  constructor() {
    this.size = 0
    this.elements = []
  }

//stack.length()    // returns the number of elements in the stack.
  length() {
    return this.size
  }

//stack.isEmpty()   // returns true if the stack is empty or false if not.
  isEmpty() {
    return this.size === 0
  }

//stack.push("foo") // push an element (the string "foo") to the top of the stack.
  push(elementToAdd) {
    this.elementToAdd = elementToAdd
    this.size += 1
    if (typeof elementToAdd === String){
      x.split()
    }
    return this.elements = this.elements.concat(elementToAdd)
  }


//stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
  pop() {
    if (this.size === 0){
      return null
    } this.size -= 1
      return this.elements.splice(this.elements.length - 1, 1)
  }

//stack.peek()      // returns the top element in the stack or null if the stack is empty.
  peek() {
    if (this.elements.length === 0){
      return null
    } return this.elements[this.elements.length - 1]
  }

}
