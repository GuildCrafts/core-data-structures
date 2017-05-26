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
      var count = 1;
      var message = { failure: 'non-existent node in this list.' };
      var beforeNodeToDelete = null;
      var nodeToDelete = null;
      var deletedNode = null;

      if (length === 0 || position < 1 || position > this._length) {
        throw new Error(message.failure);
      }

      // 2nd use-case: the first node is removed
      if (position === 1) {
        this.head = currentNode.next;

        // 2nd use-case: there is a second node
        if (!this.head) {
          this.head.previous = null;
          // 2nd use-case: there is no second node
        } else {
          this.tail = null;
        }

        // 3rd use-case: the last node is removed
      } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
        // 4th use-case: a middle node is removed
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
  }]);

  return DoublyLinkedList;
}();

exports.default = DoublyLinkedList;