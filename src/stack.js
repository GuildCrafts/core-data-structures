'use strict'

export default class Stack {
  constructor() {
    this.list = []
    this.top = null
  }
  push(element) {
    this.top = element
    return this.list.push(element)
  }
  pop() {
    this.top = this.list[this.list.length - 2] || null
    return this.list.pop() || null
  }
  peek() {
    return this.top || null
  }
  isEmpty() {
    return this.list.length === 0
  }
  length() {
    return this.list.length
  }
}
