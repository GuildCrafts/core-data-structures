"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node() {
    _classCallCheck(this, Node);

    this.data = null;
    this.next = null;
  }

  _createClass(Node, [{
    key: "getData",
    value: function getData(data) {
      return data;
    }
  }, {
    key: "setNext",
    value: function setNext(data) {
      var currentNode = new Node();
      currentNode.data = data;
      this.next = currentNode;
      return this;
    }
  }, {
    key: "getNext",
    value: function getNext() {
      if (this.next === null) {}
      return this.next;
    }
  }]);

  return Node;
}();

// const node = new Node()
// node.data = 15
// console.log(node)
// node.setNext(14)
// console.log(node)
// console.log(node.getNext().data)

exports.default = Node;