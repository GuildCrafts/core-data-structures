import Node from '../src/node'

'use strict'

// A list of nodes that link to each other, like a daisy-chain.
export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }


  // Returns the first node in the list
  getHead(){
      return this.head
  }

  // Returns the last node in the list
  getTail(){
      return this.tail
  }

  // Returns the size of the list (number of nodes)
  size(){
      return this.length
  }

  // Inserts a node (with the provided data) to the tail of the list
  insert(nodeData){
      let node = new Node({data: 'nodeData'})
      if (this.head === null){
          this.head = node
      } else {
          let currentNode = this.head
          while (currentNode.next){
              currentNode = currentNode.next
          }
          currentNode.next = node
      }

      this.length++
      return node
  }

  // Determines whether or not the list contains the provided data
  contains(data){

  }

  // Returns the first node containing the provided data, or -1 if not found
  find(data){

  }



  // Inserts a node (with the provided data) to the head of the list
  insertFirst(data){

  }

  // Inserts a node (with data "apples") before the first node containing "bananas"
  insertBefore(data, index){

  }

  // Inserts a node (with data "bananas") after the first node containing "apples"
  insertAfter(data, inex){

  }

  // Removes the tail node from the list
  remove(){

  }

  // Removes the head node from the list
  removeFirst(){

  }

  // Determines if the list is empty or not
  isEmpty(){

  }

   // Clears the list of all nodes/data
   clear(){

   }
}
