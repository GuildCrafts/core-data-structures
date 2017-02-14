'use strict'

export default class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
}
  push(element) {
    this.dataStore = element
    this.top++
  }

  pop() {
    this.dataStore[this.top-1];
  }

  peek() {
    return this.dataStore[this.top-1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }

}
