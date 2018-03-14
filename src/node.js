'use strict'

export default class Node {
  constructor({ data, next }) {
    this.data = data;
    this.next = next || null;
  }

  getData() {
    return this.data;
  }

  getNext() {
    return this.next;
  }

  setNext(nextNode) {
    this.next = nextNode;
    return this;
  }
}
