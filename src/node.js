'use strict'

export default class Node {
  constructor( element ) {
    this.element = element,
    this.link = null
  }

  next() {
    return this.link
  }

  data() {
    return this.element
  }

}
