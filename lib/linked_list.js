"use strict";

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

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this._length = 0;
  }

  _createClass(LinkedList, [{
    key: "getHeadNode",
    value: function getHeadNode() {
      return this.head.data;
    }
  }, {
    key: "getTailNode",
    value: function getTailNode() {
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode.data;
    }
  }, {
    key: "insert",
    value: function insert(data) {
      var node = new Node(data);
      if (!this.head) {
        this.head = node;
        this._length += 1;
        return node;
      }
      var currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this._length += 1;
      return node;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(data, newData) {
      var currentNode = this.head;
      var insertedNode = void 0;
      while (currentNode !== null && insertedNode == undefined) {
        if (JSON.stringify(currentNode.next.data) === JSON.stringify(data)) {
          insertedNode = new Node(newData);
          insertedNode.next = currentNode.next;
          currentNode.next = insertedNode;
        }
        if (currentNode === this.head && currentNode.data === data) {
          insertedNode = new Node(newData);
          insertedNode.next = currentNode;
          this.head = insertedNode;
        }
      }
      this._length += 1;
      return insertedNode;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(data, newData) {
      var node = new Node(newData);
      var currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.data === data) {
          node.next = currentNode.next;
          currentNode.next = node;
          return node;
        }
        currentNode.next = node;
      }
    }
  }, {
    key: "removeFirst",
    value: function removeFirst() {
      var currentNode = this.head;
      this.head = currentNode.next;
      currentNode = null;
      this._length--;
    }
  }, {
    key: "size",
    value: function size() {
      return this._length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (!this.head) {
        return true;
      }
      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null;
      this._length = 0;
      this.data = null;
    }
  }]);

  return LinkedList;
}();

// const ll = new LinkedList()
// ll.insert(11)
// ll.insert(12)
// ll.insert(13)
// ll.insert(14)
// ll.clear()
// console.log(ll.getHeadNode())


exports.default = LinkedList;