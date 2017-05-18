'use strict'

/*
  Class declaration for Node and export statement making that
  object the default export from this module.
*/
export default class Node {
  constructor(nodeProps) {
    // If the argument is valid:
    if (
      nodeProps.data !== undefined
      && (
        nodeProps.next === undefined
        || nodeProps.next instanceof Node
      )
    ) {
      this.data = nodeProps.data;
      this.next = nodeProps.next;
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
    if (newNext instanceof PriorityNode) {
      this.next = newNext;
    }
    return this;
  }
}
