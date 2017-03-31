'use strict'

export default class Stack {

  constructor(data) {
    this.top = null;
    this.size = 0;
  }

  push(element) {
    let nextNode = new Node (element)
    nextNode.next = this.top
    this.top = nextNode
    this.size++
  }

  pop() {
    if(this.top) {
      let popped = this.top;
      this.top = this.next;
      this.size -= 1;
      return popped.data;
    } else {
      return null;
    }
  }

  peek() {
    if(this.top) {
      return this.top;
    } else {
      return null;
    }
  }

  isEmpty() {
    if(this.top){
      return false;
    } else {
      return true;
    }
  }

  length() {
    return this.size;
  }

}

class Node {
  constructor(data) {
    this.data = data
    this.next = null;
  }
}

const bayarea = new Stack()


bayarea.push('foo')
// bayarea.push('fred')
// bayarea.push('BMW')
console.log(bayarea)
