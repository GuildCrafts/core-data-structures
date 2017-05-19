'use strict';

/*
  Class declaration for DoubleNode and export statement making that
  object the default export from this module.
*/
export default class DoubleNode {
  constructor(nodeProps) {
    // If the argument is valid:
    if (
      nodeProps !== undefined
      && nodeProps.data !== undefined
      && (
        nodeProps.next === undefined
        || nodeProps.next instanceof DoubleNode
      )
      && (
        nodeProps.previous === undefined
        || nodeProps.previous instanceof DoubleNode
      )
    ) {
      this.data = nodeProps.data;
      this.next = nodeProps.next;
      this.previous = nodeProps.previous;
    }
  }
  // Returns the node’s data.
  getData() {
    return this.data;
  }
  // Returns the next node, or null if none.
  getNext() {
    return this.next || null;
  }
  // Changes the next node, if specified, and returns this node.
  setNext(newNext) {
    if (newNext instanceof DoubleNode) {
      this.next = newNext;
    }
    return this;
  }
  // Returns the previous node, or null if none.
  getPrevious() {
    return this.previous || null;
  }
  // Changes the previous node, if specified, and returns this node.
  setPrevious(newPrevious) {
    if (newPrevious instanceof DoubleNode) {
      this.previous = newPrevious;
    }
    return this;
  }
}
