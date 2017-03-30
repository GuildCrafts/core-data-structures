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
      newNode.prev = cursor
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
      this.head.prev = newNode
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
    if(frontNode.data == this.head.data) { //reassigns head of the list to be the new node
      this.insertFirst(newData)
    } else {
      frontNode.prev.next = newNode
      newNode.prev = frontNode.prev
      newNode.next = frontNode
      frontNode.prev = newNode
      this.listSize++
    }
  }

  insertAfter( behindData, newData ) {
    const behindNode = this.find( behindData )
    const newNode = new Node( newData )
    if( behindNode == -1 ) {
      throw new Error(`Target: ${newData}, does not exist in List `)
    }
    if(behindNode.next == null ){
      this.insert(newData)
    } else {
      newNode.next = behindNode.next
      newNode.next.prev = newNode
      newNode.prev = behindNode
      behindNode.next = newNode
      this.listSize++
    }
  }

  remove() {
    if(this.listSize < 1) { throw new Error('List is empty. Nothing to remove.')}

    let cursor = this.head
    while(cursor.next && cursor.next != this.getTailNode()) { cursor = cursor.next }
    if(cursor.next == null) {
      this.clear()
    } else {
      cursor.next.prev = null
      cursor.next = null
      this.listSize--
    }
  }

  removeFirst() {
    if(this.listSize < 1) { throw new Error('List is empty. Nothing to remove.')}

    let newHead = this.head.next
    if(newHead == null) {
      this.clear()
    } else {
      this.head.next = null
      newHead.prev = null
      this.head = newHead
      this.listSize--
    }
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
    let forwardTraversalString = 'FWT: HEAD<--->'
    let backwardTraversalString = '<--->TAIL'
    let lastNode = null
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      forwardTraversalString = forwardTraversalString + `${cursor.data}<--->`
      lastNode = cursor
    }
    for(lastNode; lastNode != null; lastNode = lastNode.prev){
      backwardTraversalString = `<--->${lastNode.data}` + backwardTraversalString
    }
    console.log(forwardTraversalString)
    console.log('BWT: ' + backwardTraversalString);
  }
}
