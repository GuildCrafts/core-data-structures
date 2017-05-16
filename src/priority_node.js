'use strict'

/*
  Class declaration for PriorityNode and export statement making that
  object the default export from this module.
*/
export default class PriorityNode {
  constructor(nodeProps) {
    // If the argument is valid:
    if (
      nodeProps.data !== undefined
      && (
        nodeProps.priority === undefined
        || typeof nodeProps.priority === 'number'
      )
      && (
        nodeProps.next === undefined
        || nodeProps.next instanceof PriorityNode
      )
    ) {
      this.data = nodeProps.data;
      this.priority = nodeProps.priority || 0;
      this.next = nodeProps.next;
    }
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
  // Changes the node’s priority and returns the node.
  setPriority(newPriority) {
    if (typeof newPriority === 'number') {
      this.priority = newPriority;
    }
    return this;
  }
  // Changes the next node, if specified, and returns this node.
  setNext(newNext) {
    if (newNext instanceof PriorityNode) {
      this.next = newNext;
    }
    return this;
  }
}
