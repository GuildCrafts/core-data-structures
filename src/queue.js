'use strict';
import Node from './node2';

/*
  Class declaration for Queue and export statement making that object the
  default export from this module.
*/
export default class Queue {
  constructor() {
    this.queue = [];
  }
  // Adds a specified element to the back of the queue.
  enqueue(d) {
    const newNode = new Node({data: d});
    if (newNode.data !== undefined) {
      this.queue.push(newNode);
    }
  }
  /*
    Removes and returns the front element from the queue. Returns null if
    the queue is empty.
  */
  dequeue() {
    return this.queue.shift() || null;
  }
  // Returns the front node.
  front() {
    return this.queue[0] || null;
  }
  // Returns the back node.
  back() {
    return this.queue[this.queue.length - 1] || null;
  }
  // Returns whether the queue is empty.
  isEmpty() {
    return this.queue.length === 0;
  }
  // Returns the count of elements.
  length() {
    return this.queue.length;
  }
}
