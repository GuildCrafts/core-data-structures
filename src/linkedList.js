'use strict'

import Node from './node';

export default class linkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.size = 0;
  }

  getHeadNode() {
    return this.headNode;
  }

  getTailNode() {
    return this.tailNode;
  }

  contains(data) {
    let node = this.headNode;

    while(true) {
      if (node.getData() === data) {
        return true;
      }

      if (node === this.tailNode) {
        return false;
      }

      node = node.getNext();
    }
  }

  find(data) {
    let node = this.headNode;

    while(true) {
      if (node.getData() === data) {
        return node;
      }

      if (node === this.tailNode) {
        return -1;
      }

      node = node.getNext();
    }
  }

  insert(data) {
    const node = new Node({ data });

    if (this.tailNode) {
      this.tailNode.setNext(node);
    }

    this.tailNode = node;
    this.size++;
  }

  insertFirst(data) {
    const node = new Node({ data });

    if (this.headNode) {
      node.setNext(this.headNode);
    }

    this.headNode = node;
    this.size++;
  }

  insertBefore(reference, data) {
    const node = new Node({ data });
    let currentNode = this.headNode.getNext();
    let previousNode = this.headNode;
    let inserted = false;

    if (this.headNode.getData() === reference) {
      node.setNext(this.headNode);
      this.headNode = node;
    }

    while(!inserted) {
      if (!currentNode) {
        return -1;
      }

      if (currentNode.getData() === reference) {
        previousNode.setNext(node);
        node.setNext(currentNode);
        inserted = true;
      }

      previousNode = currentNode;
      currentNode = currentNode.getNext();
    }

    this.size++;
  }

  insertAfter(reference, data) {
    const node = new Node({ data });
    let currentNode = this.headNode;
    let nextNode = currentNode.getNext();
    let inserted = false;

    while(!inserted) {
      if (currentNode.getData() === reference) {
        currentNode.setNext(node);
        node.setNext(nextNode);
        inserted = true;
      }

      if (!nextNode) {
        return -1;
      }

      currentNode = nextNode;
      nextNode = nextNode.getNext();
    }
  }

  remove() {
    let node = this.headNode;

    while(node.getNext() !== this.tailNode) {
      node = node.getNext();
    }

    node.setNext(null);
    this.tailNode = node;
  }

  removeFirst() {
    const newHead = this.headNode.getNext();
    this.headNode = newHead;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  clear() {
    this.headNode = null;
    this.tailNode = null;
    this.size = 0;
  }
}
