import Node from './node'

'use strict'

export default class LinkedList {
  constructor() {
    this.length = 0,
    this.head = null,
    this.tail = null
  }

  insert( data ) {
    const nodeToInsert = new Node( data )

    if ( this.length === 0 ) {
      this.head = nodeToInsert
      this.tail = this.head
    } else if ( this.length === 1 ){
      this.head.link = nodeToInsert
      this.tail = nodeToInsert
    } else {
      this.tail.link = nodeToInsert
      this.tail = nodeToInsert
    }
    this.length++
  }

  insertFirst( data ) {
    const nodeToInsert = new Node( data )

    if ( this.length === 0 ) {
      this.head = nodeToInsert
      this.tail = this.head
    } else {
      nodeToInsert.link = this.head
      this.head = nodeToInsert
    }
    this.length++
  }

  getHeadNode() {
    return this.head ? this.head : null
  }

  getTailNode() {
    return this.tail ? this.tail : null
  }

  contains( comparator ) {
    let nodeToCompare = this.head

    for ( let index = 0; index <= this.length; index++ ) {
      if ( nodeToCompare.element === comparator ) {
        return true
      } else {
        if ( !nodeToCompare.next() ) break
        nodeToCompare = nodeToCompare.next()
      }
    }

    return false
  }

  find( yourself ) {
    let nodeToCompare = this.head

    for ( let index = 0; index <= this.length; index++ ) {
      if ( nodeToCompare.element === yourself ) {
        return nodeToCompare
      } else {
        if ( !nodeToCompare.next() ) break
        nodeToCompare = nodeToCompare.next()
      }
    }
    return -1
  }

  insertBefore( locator, insert ) {
    let nodeToCompare = this.head,
        previousNode
    const nodeToInsert = new Node( insert ),
          indexNode = this.find( locator )

    for ( let index = 0; index <= this.length; index++ ) {
      if ( nodeToCompare.link.data() === locator ) {
        previousNode = nodeToCompare
        break
      } else {
        if ( !nodeToCompare.next() ) break
        nodeToCompare = nodeToCompare.next()
      }
    }
    previousNode.link = nodeToInsert
    nodeToInsert.link = indexNode
    length++
  }

  insertAfter( locator, insert ) {
    const nodeToInsert = new Node( insert ),
          locatorNode = this.find( locator ),
          nodeThatGoesAfter = locatorNode.link

    locatorNode.link = nodeToInsert
    nodeToInsert.link = nodeThatGoesAfter
    length++
  }

  isEmpty() {
    return this.length === 0 ? true : false
  }

  size() {
    return this.length
  }

  remove() {
    let nodeToCompare = this.head

    for ( let index = 0; index <= this.length; index++ ) {
      if ( nodeToCompare.link === this.tail ) {
          nodeToCompare.link = null
          this.tail = nodeToCompare
        break
      } else {
        if ( !nodeToCompare.next() ) break
        nodeToCompare = nodeToCompare.next()
      }
    }
    this.length--
  }

  removeFirst() {
    const oldHead = this.head
    this.head = this.head.link
    oldHead.link = null
    this.length--
  }

  clear() {
    this.length = 0
    this.head = null
    this.tail = null
  }

}
