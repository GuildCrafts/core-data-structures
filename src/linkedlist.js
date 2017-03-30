'use strict';

class Node {
  // constructor for node class
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  //methods for node class
  getData() { return this.data; }
  getNext() { return this.next; }
  setNext(next) { this.next = next; }

}

export default class LinkedList {
  // constructor for LinkedList
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  // methods for LinkedList -----------------------------
  // inserts a node to the head of the list
  insertFirst(data) {
    let first_node = new Node(data, this.headNode);
    // a check for the case when the first node is both the head and tail node
    if (this.headNode === null) this.tailNode = first_node;
    // ensures the head node is indeed the first node
    this.headNode = first_node;
    // ensures that the linked list keeps track of the tail node after the edge
    // case of when the only node in the list is the head and nail node
    if (first_node.next !== null) this.tailNode = first_node.next;
    this.length++;
  }

  // inserts data to the tail of the linked list
  insert(data) {
    // if theres's no data in the list, then just use insertFirst function
    if (this.headNode === null) {
      this.insertFirst(data);
      // the above call should take care of assigning the headNode and tailNode
      // pointer variables
      return; // this is here to ensure insert() doesn't call the lines below
    }

    // creates the brand new tail node
    // the tail node's next property value is by definition null
    let tail_node = new Node(data, null);
    this.tailNode = tail_node;

    // this while loop structure helps find the node we need to update to insert
    // a tail node
    let current_node = this.headNode;
    while (current_node.next !== null) {
      current_node = current_node.next;
    }
    // assigns the last node found from the while loop as the tail_node
    current_node.next = tail_node;

    //increases the length of the list by 1
    this.length++;
  }

  // returns the first node in the list
  getHeadNode() {
    if (this.headNode === null) return null;
    return this.headNode;
  }

  // returns the last node in the list
  getTailNode() {
    // execution of the line below means that the list should be empty
    if (this.headNode === null) return null;
    return this.tailNode;
  }
  // returns the size of the linked list
  size() {
    return this.length;
  }

  // removes the first element of the linked list
  removeFirst() {
    // handles the case where list is null
    if (this.headNode === null) return null; // QUESTIONHERE: is this the best practice?
    // when a remove is called on an empty data structure?

    // tells the headNode pointer to now be the next pointer in the headNode.
    this.headNode = this.headNode.next;
    this.length--;
  }

  // removes the tail node of the linked list
  remove() {
    // if list is null, there is nothing to remove
    if (this.headNode === null) return null; // QUESTIONHERE: is this the best practice?
    // when a remove is called on an empty data structure?

    //handles case when there is only one element in the list
    if (this.headNode.next === null) {
      this.removeFirst();
      return; // ensures the next lines of this function don't execute
    }

    // to remove the tail node, we must loop through the list and gather the
    // second to last node and the last node
    let current_node = this.headNode;
    let previous_node = null;
    while (current_node.next !== null) {
      current_node = current_node.next;
      previous_node = current_node;
    }

    // after the previous node is found, we can simply assign the this.tailNode
    // pointer to that previous node.
    this.tailNode = previous_node;
    // setting the next property of the tailNode to be null, which is by definition
    this.tailNode.next = null;
    this.length--;
  }

  // returns true if list is empty, false if list is not empty
  isEmpty() {
    if (this.headNode === null) return true;
    return false;
  }

  // determines if list contains given data
  contains(data) {
    let current_node = this.headNode;
    while (current_node !== null) {
      if (current_node.data === data) return true;
      current_node = current_node.next;
    }
    return false;
  }

  // finds and returns the NODE containing the data or -1 if not found
  find(data) {
    let current_node = this.headNode;
    while (current_node !== null) {
      if (current_node.data === data) return current_node;
      current_node = current_node.next;
    }
    return -1;
  }

  // // takes two arguments and inserts the second argument BEFORE the first arguments
  // insertBefore(data1, data2) {
  //   let newNode = new Node(data2, null);
  // }

  // clears the linked list
  clear() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }
}
