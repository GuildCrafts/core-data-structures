import Node from './node'

export default class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    let cursor = this.head
    while( cursor.next ) { cursor = cursor.next }
    return cursor
  }

  contains( data ) {

  }

  find( data ) {

  }
  // adds to tail
  insert( data ) {
    //head is first node inserted
    const newNode = new Node( data )
    let cursor = this.head
    if(this.size === 0) {
      this.head = newNode
    } else {
      //keep traversiing untill cursor.next is null
      while( cursor.next ) { cursor = cursor.next }
      cursor.next = newNode
    }
    this.size++
  }
  // adds to head
  insertFirst( data ) {
    const newNode = new Node( data )
    if(this.size === 0 ) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }

  insertBefore( frontNode, prevNode) {

  }

  toString() {
    let linkedListString = 'HEAD--->'
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      linkedListString = linkedListString + `${cursor.data}--->`
    }
    console.log(linkedListString)
  }
}
