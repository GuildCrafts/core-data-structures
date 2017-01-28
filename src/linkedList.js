'use strict'

class Node {
  constructor( data, node = null ) {
    this.data = data
    this.nextNode = node
  }

  getData() {
    return this.data
  }

  getNext() {
    return this.nextNode
  }

  setNext( node ) {
    this.nextNode = node
  }
}

 class linkedList {
//creates linkedList
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  insert(data) {
    const node = new Node(data, null)

    if( this.isEmpty() ) {
      this.head = this.tail = node
    } else {
      this.tail.setNext(node)
      this.tail = this.tail.getNext()
      // this.tail = node
    }
    this.length++
  }

  insertFirst(data) {
    const node = new Node(data, null)

    if( this.isEmpty() ) {
      this.head = this.tail = node
    } else {
      node.setNext(this.head)
      this.head = node
    }
    this.length++
  }

  insertBefore(data, positionData){
    const node = new Node(data, null)

    if( this.isEmpty() ) {
      return null
    } else {
      let nodeRight = this.find(positionData)
      if(nodeRight !== -1){ // nodeRight does indeed exist
        if(nodeRight === this.getHeadNode()){
          this.head = node
        } else {
          let nodeLeft = this.findPrev(positionData)
          nodeLeft.setNext(node)
        }
        node.setNext(nodeRight)
      } else {
        return null
      }
    }
    this.length++
  }

  insertAfter(data, positionData){
    if( this.isEmpty() ) return null

    const node = new Node(data, null)
    let currentNode = this.head

    while (currentNode.nextNode) {
      if (currentNode.data === positionData) {
        node.nextNode = currentNode.nextNode 
        currentNode.nextNode = node
        this.length++
        console.log('currentNode =====>', currentNode)
        break
      }

      currentNode = currentNode.nextNode
    }


//     if( this.isEmpty() ) {
//       return null
//     }
//     let nodeLeft = this.find(positionData)
// console.log('nodeLeft', nodeLeft)
//     if(nodeLeft !== -1){ // nodeLeft does indeed exist
//       node.next = this.nodeLeft = node
//       }
//   }

}







  getHeadNode() {
    if( this.head === undefined ) {
      return null
    } else {
      return this.head
    }
  }

  find(data){
    if ( this.isEmpty() ){
      return -1
    }
    let iterator = this.head
    while(iterator){
      if(data === iterator.data) return iterator
      iterator = iterator.getNext()
    }
    return -1
  }

  // Helper Function
  // TODO: Make private
  findPrev(data){
    if ( this.isEmpty() ){
      return -1
    }
    let iterator = this.head
    while(iterator.getNext()){
      if(data === iterator.getNext().data) return iterator
      iterator = iterator.getNext()
    }
    return -1
  }

  // length() {
  //   return this.length
  // }
  //
  isEmpty() {
    return this.length == 0
  }

  // getTailNode(){
  //   if( this.tail === undefined ) {
  //     return null
  //   } else {
  //     return this.tail
  //   }
  // }

}

export {
  Node,
  linkedList
}
