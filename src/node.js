'use strict'

export default class Node{
  constructor(data) {
    this.data = data
    this.next = null

  }

  setNext(data) {
    this.next = data
    return this
  }

  getNext() {
    if (this.next) {
    return this.next
  }
  return null
  }
}
