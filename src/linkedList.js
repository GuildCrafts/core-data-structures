import Node from './node'

export default class LinkedList {
  constructor() {
    this.head = null
    this.listSize = 0
  }

  getHeadNode() {
    if(this.head == null) {
      throw new Error(`Trying to get head of empty List.`)
    }
    return this.head
  }

  getTailNode() {
    if(this.head == null) {
      throw new Error(`Trying to get tail of empty List.`)
    }

    let cursor = this.head
    while( cursor.next ) { cursor = cursor.next }
    return cursor
  }

  contains( data ) {
    return this.find(data) != -1
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
    if(this.listSize === 0) {
      this.head = newNode
    } else {
      //keep traversiing untill cursor.next is null
      while( cursor.next ) { cursor = cursor.next }
      cursor.next = newNode
    }
    this.listSize++
  }
  // adds to head
  insertFirst( data ) {
    const newNode = new Node( data )
    if(this.listSize === 0 ) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.listSize++
  }

  insertBefore( frontData, newData ) {
    const frontNode = this.find( frontData )
    if( frontNode == -1 ) {
      throw new Error(`Target: ${newData}, does not exist in List `)
    }

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
      this.listSize++
    }
  }

  insertAfter( behindData, newData ) {
    const behindNode = this.find( behindData )
    const newNode = new Node( newData )
    if( behindNode == -1 ) {
      throw new Error(`Target: ${newData}, does not exist in List `)
    }

    newNode.next = behindNode.next
    behindNode.next = newNode
    this.listSize++
  }

  remove() {
    if(this.listSize < 1) { throw new Error('List is empty. Nothing to remove.')}

    let cursor = this.head
    while(cursor.next && cursor.next != this.getTailNode()) { cursor = cursor.next }
    cursor.next = null
    this.listSize--
  }

  removeFirst() {
    if(this.listSize < 1) { throw new Error('List is empty. Nothing to remove.')}

    let newHead = this.head.next
    this.head.next = null
    this.head = newHead
    this.listSize--
  }

  isEmpty() {
    return this.listSize === 0
  }

  size() {
    return this.listSize
  }

  clear() {
    this.head = null
    this.listSize = 0
  }

  toString() {
    let linkedListString = 'HEAD--->'
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      linkedListString = linkedListString + `${cursor.data}--->`
    }
    console.log(linkedListString)
  }
}
