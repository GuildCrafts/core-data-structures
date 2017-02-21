import { Node } from './index'

export default class LinkedList {
  constructor() {
    let _head = null
    let _size = 0

    this._getHead = function() {
      return _head
    }
    this._setHead = function( node ) {
      _head = node
    }
    this._getSize = function() {
      return _size
    }
    this._incrementSize = function() {
      _size++
    }
    this._decrementSize = function() {
      _size--
    }
    this._resetSize = function() {
      _size = 0
    }

    this._findTail = function( node ) {
      let nextNode = node.next()
      if ( nextNode === null ) {
        return node
      } else {
        return this._findTail( nextNode )
      }
    }
    this._findNode = function( node, data ) {
      if ( node === null ) return -1
      if ( node.data() === data ) {
        return node
      } else if ( node.next() === null ) {
        return -1
      } else {
        return this._findNode( node.next(), data )
      }
    }
    this._findPrevNode = function( node, data ) {
      let nextNode = node.next()
      if ( nextNode === null ) {
        return false
      }
      if ( nextNode.data() === data ) {
        return node
      } else {
        return this._findPrevNode( nextNode, data )
      }
    }
  }

  insert( data ) {
    let newNode = new Node( data )
    let headNode = this.getHeadNode()
    if ( headNode === null ) {
      this._setHead( newNode )
      this._incrementSize()
    } else {
      let tailNode = this._findTail( headNode )
      tailNode.setPointer( newNode )
      this._incrementSize()
    }
  }
  insertFirst( data ) {
    let node = new Node( data )
    let currentHead = this.getHeadNode()
    node.setPointer( currentHead )
    this._setHead( node )
    this._incrementSize()
  }
  insertBefore( nodeData, insertData ) {
    if ( this.contains( nodeData ) ) {
      let node = this.find( nodeData )
      let prevNode = this.findPrev( node.data() )
      let newNode = new Node( insertData )
      prevNode.setPointer( newNode )
      newNode.setPointer( node )
      this._incrementSize()
    } else {
      throw new Error()
    }
  }
  insertAfter( nodeData, insertData ) {
    if ( this.contains( nodeData ) ) {
      let targetNode = this.find( nodeData )
      let nextNode = targetNode.next()
      let insertNode = new Node( insertData )
      insertNode.setPointer( nextNode )
      targetNode.setPointer( insertNode )
      this._incrementSize()
    } else {
      throw new Error()
    }
  }

  remove() {
    if ( !this.isEmpty() ) {
      let tailNode = this.getTailNode()
      let newTailNode = this.findPrev( tailNode.data() )
      newTailNode.setPointer( null )
      this._decrementSize()
    }
  }

  removeFirst() {
    if ( !this.isEmpty() ) {
      let headNode = this.getHeadNode()
      let newHeadNode = headNode.next()
      this._setHead( newHeadNode )
      this._decrementSize()
    }
  }

  getHeadNode() {
    return this._getHead()
  }

  getTailNode() {
    if ( this.isEmpty() ) {
      return null
    } else {
      return this._findTail( this.getHeadNode() )
    }
  }

  contains( data ) {
    return this._findNode( this.getHeadNode(), data ) !== -1
  }

  find( data ) {
    return this._findNode( this.getHeadNode(), data )
  }

  findPrev( data ) {
    if ( this.isEmpty() ) {
      return null
    } else {
      return this._findPrevNode( this.getHeadNode(), data )
    }
  }

  isEmpty() {
    return this._getSize() < 1 ? true : false
  }

  size() {
    return this._getSize()
  }

  clear() {
    this._setHead( null )
    this._resetSize()
  }

}
