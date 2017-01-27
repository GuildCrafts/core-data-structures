'use strict'

class Node {
    constructor( data, next = null ) {
      this.data = data
      this.next = next
    }

  getData() {
    return this.data
  }

  getNext() {
    return this.next
  }

  setNext() {
    this.next = next
  }
}

export default class linkedList {
//creates linkedList
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }



  add(data) {
    const node = new Node(data)

    if( this.head === null ) {
      this.head = this.tail = node
      // this.tail = node
    } else {
      this.tail.setNext(node)
      this.tail = node
    }
    this.length++
  }


  getHeadNode() {
    if( this.tail === undefined ) {
      return null
    } else {
      return this.tail
    }
  }

  // getTailNode(){
  //   if( this.tail === undefined ) {
  //     return null
  //   } else {
  //     return this.tail
  //   }
  // }

}
