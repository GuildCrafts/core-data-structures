"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.size = 0;
    this.elements = [];
  }

  //stack.length()    // returns the number of elements in the stack.


  _createClass(Stack, [{
    key: "length",
    value: function length() {
      return this.size;
    }

    //stack.isEmpty()   // returns true if the stack is empty or false if not.

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }

    //stack.push("foo") // push an element (the string "foo") to the top of the stack.

  }, {
    key: "push",
    value: function push(elementToAdd) {
      this.elementToAdd = elementToAdd;
      this.size += 1;
      if ((typeof elementToAdd === "undefined" ? "undefined" : _typeof(elementToAdd)) === String) {
        x.split();
      }
      return this.elements = this.elements.concat(elementToAdd);
    }

    //stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.

  }, {
    key: "pop",
    value: function pop() {
      if (this.size === 0) {
        return null;
      }this.size -= 1;
      return this.elements.splice(this.elements.length - 1, 1);
    }

    //stack.peek()      // returns the top element in the stack or null if the stack is empty.

  }, {
    key: "peek",
    value: function peek() {
      if (this.elements.length === 0) {
        return null;
      }return this.elements[this.elements.length - 1];
    }
  }]);

  return Stack;
}();

exports.default = Stack;