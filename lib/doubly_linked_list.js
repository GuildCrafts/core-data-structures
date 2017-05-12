'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
};

var DoublyLinkedList = function () {
  function DoublyLinkedList() {
    _classCallCheck(this, DoublyLinkedList);

    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  _createClass(DoublyLinkedList, [{
    key: 'getHeadNode',
    value: function getHeadNode() {
      return this.head;
    }
  }, {
    key: 'getTailNode',
    value: function getTailNode() {
      return this.tail;
    }
  }, {
    key: 'insert',
    value: function insert(value) {
      var node = new Node(value);

      if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      } else {
        this.head = node;
        this.tail = node;
      }
      this._length++;
      return node;
    }
  }, {
    key: 'find',
    value: function find(position) {
      var currentNode = this.head;
      var length = this._length;
      var count = 1;
      var message = { failure: 'Non-existent node in this list.' };

      if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
      }
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }, {
    key: 'remove',
    value: function remove(position) {
      var currentNode = this.head;
      var length = this._length;
      var count = 1;
      var message = { failure: 'Failure: non-existent node in this list.' };
      var beforeNodeToDelete = null;
      var nodeToDelete = null;
      var deletedNode = null;

      // 1st use-case: an invalid position
      if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
      }

      if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        while (count < position) {
          currentNode = currentNode.next;
          count++;
        }
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
      }
      this._length--;
      return message.success;
    }

    // removeFirst(position) {
    //   if (position === 1) {
    //     this.head = currentNode.next;
    // }

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      if (!this.head) {
        return true;
      }
      return false;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._length = 0;
      this.head = null;
      this.tail = null;
    }
  }, {
    key: 'size',
    value: function size() {
      return this._length;
    }
  }]);

  return DoublyLinkedList;
}();

exports.default = DoublyLinkedList;