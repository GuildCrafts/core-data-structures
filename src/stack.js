'use strict'

import Node from './node';
// L I F O
export default class Stack {
  constructor() {
    this.top = null;
    this.totalLength = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  length() {
    return this.totalLength;
  }

  peek() {
    return this.top;
  }

  push(data) {
    this.totalLength++;
    const node = new Node({ data, next: this.top });
    this.top = node;
  }

  pop() {
    this.totalLength -= (this.totalLength === 0 ? 0 : 1);
    const node = this.top;
    this.top = node.getNext();
    return node;
  }
}
