'use strict'

//creating the node class from the given spec interface
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  getData() { return this.data; }
  getNext() { return this.next; }
  setNext(next) { this.next = next; }
}

//creating a Stack class, which implements the given spec functions
export default class Stack {
  constructor(){
    // top_stack is a pointer to the top of the stack
    this.top_stack = null;;
    this.length = 0
  }

  // methods for stack data structure implemnetation
  // pushes an element to the top of the stack
  push(data) {
      let top_node = new Node(data, this.top_stack);
      this.top_stack = top_node;
      this.length++;
  }

  // returns the length of this stack
  getlength() {
      return this.length;
  }

  // returns and removes the top element in the stack or null if the stack is empty
  pop() {
    let topElement;

    // if statement checks to see if there is a next element or it is null so it can make
    // the correct top_stack pointer assignment
    if (this.top_stack === null){
        return null;
    }
    if (this.top_stack.data !== null) {
        // the pointer in the top of the stack is now pointing to the next element in the stack
        // making the second element the top elements
        topElement = this.top_stack.data;
        this.top_stack = this.top_stack.next;
    }
    // reduce length of stack after pop()
    this.length--;
    return topElement
  }

  // returns the top element in the stack OR null if it is empty. Doesn't effect the stack
  peek() {
    if (this.top_stack === null) return null;
    return this.top_stack.data;
  }

  // returns a boolean that's true if the stack is empty
  isEmpty() {
    if (this.top_stack === null) return true;
    return false;
  }
}
