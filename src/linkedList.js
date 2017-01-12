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
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      if(cursor.data == data){
        return cursor
      }
    }
    return -1
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

  insertBefore( frontData, newData ) {
    const frontNode = this.find( frontData )
    const newNode = new Node( newData )  //has our new data
    let beforeFN = this.head
    while( beforeFN.next != null && beforeFN.next != frontNode ) {
      beforeFN = beforeFN.next
    }
    if(frontNode.data == this.head.data) { //reassigns head of the list to be the new node
      this.insertFirst(newData)
    } else {
      newNode.next = frontNode
      beforeFN = newNode
    }
  }

  insertAfter( behindData, newData ) {
    const behindNode = this.find( behindData )
    const newNode = new Node( newData )
    newNode.next = behindNode.next
    behindNode.next = newNode
  }

  toString() {
    let linkedListString = 'HEAD--->'
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      linkedListString = linkedListString + `${cursor.data}--->`
    }
    console.log(linkedListString)
  }
}
