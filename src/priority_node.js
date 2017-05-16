'use strict'

/*
  Class declaration for PriorityNode and export statement making that
  object the default export from this module.
*/
export default class PriorityNode {
  constructor(nodeProps) {
    this.data = nodeProps.data;
    this.priority = nodeProps.priorty;
    this.next = nodeProps.next;
  }
  // Returns the node’s data.
  getData() {
    return this.data;
  }
  // Returns the node’s priority.
  getPriority() {
    return this.priority;
  }
  // Returns the next node, or null if none.
  getNext() {
    return this.next || null;
  }
  // Changes the node’s priority and returns the post-change node.
  setPriority(newPriority) {
    this.priority = newPriority;
    return this;
  }
  // Changes the next node and returns the pre-change node.
  setNext(newNext) {
    const origThis = this;
    this.next = newNext;
    return origThis;
  }
}
