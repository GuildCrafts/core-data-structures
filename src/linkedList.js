'use strict'

//1. getHeadNode
//2. insertFirst
//3. insert()
//4. next
//5. size()

class Node{
  constructor(valueOfNode){
    this.valueOfNode = valueOfNode
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  } // increment this size and return it for size()

  getHeadNode = () => {
    if( !this.head ){
      return null
    }
    else {
      return this.head
    }
  }

  insertFirst = (value) => {
    let node = new Node(value)
    let currentHead = this.head
    //if empty - this.head to value and this.next to null
    if(!currentHead){
      console.log('no head', !currentHead);
      return this.head = node
    }
    else{
      return 'this is wrong'
    }
    //if not empty - set this.head to value and this.next to previous head
  }
}

module.exports = {
  Node,
  LinkedList
}
