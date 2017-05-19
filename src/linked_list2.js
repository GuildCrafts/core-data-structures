'use strict';
import Node from './node2';

/*
  Class declaration for LinkedList and export statement making that
  object the default export from this module.
*/
export default class LinkedList {
  constructor() {
    this.list = [];
  }

  // UTILITY METHODS

  /*
    Returns the index of the first element with a data value identical to
    the specified one, or -1 if no such element exists. “First” = having the
    smallest index. The array contains the nodes, with the head (first) node
    at index 0.
  */
  firstMatchIndex(data) {
    let fmIndex = 0;
    while (fmIndex < this.list.length) {
      if (this.list[fmIndex].getData() === data) {
        return fmIndex;
      }
      else {
        fmIndex++;
      }
    }
    return -1;
  }

  // INTERROGATION METHODS

  // Returns the head (first) node.
  getHeadNode() {
    return this.list[0] || null;
  }

  // Returns the tail (last) node.
  getTailNode() {
    return this.list[this.list.length - 1] || null;
  }

  /*
    Returns whether the list contains an element with the specified data
    value.
  */
  contains(data) {
    return this.firstMatchIndex(data) > -1;
  }

  /*
    Returns the first node containing an element with the specified data
    value.
  */
  find(data) {
    return this.list[this.firstMatchIndex(data)] || -1;
  }

  // Returns whether the list is empty.
  isEmpty() {
    return this.list.length === 0;
  }

  // Returns the length of the list.
  size() {
    return this.list.length;
  }

  // MANIPULATION METHODS

  // Adds a specified element at the tail (as the last element).
  insert(d) {
    if (d !== undefined) {
      const newNode = new Node({data: d});
      this.list.push(newNode);
    }
  }

  // Adds a specified element at the head (as the first element).
  insertFirst(d) {
    if (d !== undefined) {
      const newNode = new Node({data: d});
      this.list.unshift(newNode);
    }
  }

  /*
    Adds a specified element before the first element with a specified
    data value.
  */
  insertBefore(d, n) {
    if (d !== undefined && n !== undefined) {
      const fmIndex = this.firstMatchIndex(d);
      if (fmIndex > -1) {
        const newNode = new Node({data: n});
        this.list.splice(fmIndex, 0, newNode);
      }
    }
  }

  /*
    Adds a specified element after the first element with a specified
    data value.
  */
  insertAfter(d, n) {
    if (d !== undefined && n !== undefined) {
      const fmIndex = this.firstMatchIndex(d);
      if (fmIndex > -1) {
        const newNode = new Node({data: n});
        this.list.splice(fmIndex + 1, 0, newNode);
      }
    }
  }

  // Deletes the last (tail) element.
  remove() {
    this.list.pop();
  }

  // Deletes the first (head) element.
  removeFirst() {
    this.list.shift();
  }

  // Deletes all elements.
  clear() {
    this.list.splice(0);
  }

}
