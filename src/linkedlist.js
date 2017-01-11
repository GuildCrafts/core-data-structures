'use strict'

class Node {

  constructor( data ) {
    this.data = data
    this.next = null
  }

}
export default class LinkedList {

  constructor () {
      this.head = null
      this.tail = null
      this.count = 0


  }
  // Inserts a node (with the provided data) to the head of the list
  insertFirst ( value ) {
    //create new node
    const node = new Node( value )
    //find if head is defined
    if ( this.head ) {
      //set old head to next of new node
      node.next = this.head
      //if head is defined, set new node to head
    } else {
      //if not defined set current node to head
      this.tail = node
    }
    this.head = node
    this.count++
  }
  // Returns the size of the list (number of nodes)
  size () {
    return this.count
  }

  // Inserts a node (with the provided data) to the tail of the list
  insert ( value ) {
    //create new node
    const node = new Node( value )
    //find if tail is defined
    if ( this.head === null ) {
    //set oldtail next to new node
      this.head = node
      this.tail = node

      //set newnode to tail
    } else {
      this.tail.next = node
      this.tail = node
    }
    //set new tail to null
    //this.tail = null
    this.count++
  }
  //Returns the first node containing the provided data,
  // or -1 if not found
  find( value ) {
    let currentNode = this.head
    let currentIndex = 0
    while (currentNode !== this.tail) {
      if (currentNode.data === value) {
        return currentIndex
      } else {
        currentNode = currentNode.next
        currentIndex++
      }
    }
    return currentNode.data === value ? currentIndex : -1
  }
  // Determines if the list is empty or not
  isEmpty() {
    return this.head ? false : true
  }

  // Returns the first node in the list
  getHeadNode() {
    return this.head
  }
}


    // linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"

    // linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"

    // linkedList.remove()                // Removes the tail node from the list

    // linkedList.removeFirst()           // Removes the head node from the list

    // linkedList.getHeadNode()           // Returns the first node in the list

    // linkedList.getTailNode()           // Returns the last node in the list

    // linkedList.contains("bananas")     // Determines whether or not the list contains the provided data




    // linkedList.clear()                 // Clears the list of all nodes/data
