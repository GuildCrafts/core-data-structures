'use strict';
import PriorityNode from './priority_node';

/*
  Class declaration for PriorityQueue and export statement making that
  object the default export from this module.
*/
export default class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  // Returns the count of elements with priorities lower than specified.
  lowerCount(priority) {
    let lowerCount = 0;
    while (
      lowerCount < this.queue.length
      && this.queue[lowerCount].getPriority() < priority
    ) {
      lowerCount++;
    }
    return lowerCount;
  }
  // Adds a specified element to the queue.
  enqueue(d, p) {
    const newNode = new PriorityNode({data: d, priority: p});
    if (newNode.data !== undefined) {
      this.queue.splice(this.lowerCount(p), 0, newNode);
    }
  }
  // Returns the highest-priority node.
  front() {
    return this.queue[this.queue.length - 1] || null;
  }
  // Returns the lowest-priority node.
  back() {
    return this.queue[0] || null;
  }
  // Returns whether the queue is empty.
  isEmpty() {
    return this.queue.length === 0;
  }
  // Changes the next node, if specified, and returns this node.
  length() {
    return this.queue.length;
  }
  // Adds a specified element to the queue.
  dequeue() {
    return this.queue.pop() || null;
  }
}
