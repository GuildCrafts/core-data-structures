'use strict'

let awesomeStack = []

export default class Stack {
  constructor() {
    this.commissary = []
  }

  push( item ) {
    this.commissary.push( item )
  }

  length() {
    return this.commissary.length
  }
}
