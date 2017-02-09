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
  }

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
    let initialHead = this.head

    // let end = initialHead

    if(!initialHead){
      this.size ++
      console.log('count inside if', this.size)
      this.head = node
      // let initialNodeNext = this.head.next
      // console.log('initialNodeNext', initialNodeNext);
      return this.head
    }
    else {
      node.next = initialHead
      console.log('next of new Node', node.next);
      this.size ++
      console.log('count after second insert', this.size);
      console.log('new head of linkedList', this.head);
      console.log('tail')
      return git 
    }
  }

  // getTailNode = () => {
  //   let currentNodeNext = this.node.valueOfNode
  //   if( !this.head) {
  //     return null
  //   }
  //   else {
  //     // while( currentNodeNext !== null ) {
  //     //
  //     // }
  //   }
  // }
  //
  // insertFirst('bananas')
  // debugger;
  // insertFirst('green apples')
  // insertFirst('crab apples')

}



module.exports = {
  Node,
  LinkedList
}
