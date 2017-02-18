export default class Node {
  constructor( data ) {
    let _data = data
    let _nextNode = null

    this._getData = function() {
      return _data
    }
    this._getNextNode = function() {
      return _nextNode
    }
    this._setNextNode = function( pointer ) {
      _nextNode = pointer
    }
  }

  data() {
    return this._getData()
  }

  next() {
    return this._getNextNode()
  }

  setPointer( node ) {
    this._setNextNode( node )
  }
}
