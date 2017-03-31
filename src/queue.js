'use strict'

class Node {
  constructor(data) {
    this.data = data
    this.next = null;
  }
}

export default class Queue {

  constructor(data) {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue( data ) {
    const newNode = new Node( data ) //{ data: 'foo', next: null}
    if( this.size === 0 ) {
      this.head = newNode
      this.tail = newNode
      this.size++
    } else {
      newNode.next = this.tail // newNode = { data: 'foo', next:{data: 'roo', next: null}}
      //this.tail = {{data: 'roo', next: null}
      this.tail = newNode
      this.size++
    }
  }

  dequeue() {
    if( this.size === 0 ) {
      return null
    } else {
      let removedNode = this.head
      this.head = this.next;
      this.size--;
      return removedNode
    }
  }

  front() {
    if(this.head) {
      return this.head;
    } else {
      return null;
    }
  }

  back(){
    if(this.tail) {
      return this.tail;
    } else {
      return null;
    }

  }

  isEmpty(){
    if (this.size === 0) {
      return true
    } else {
      return false
    }
  }

  length(){
    return this.size
  }
}




const queue = new Queue()

queue.enqueue('foo')
// bayarea.push('fred')
// bayarea.push('BMW')
