"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.size = 0;
    this.elements = [];
  }

  _createClass(Stack, [{
    key: "length",
    value: function length() {
      return this.size;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "push",
    value: function push(elementToAdd) {
      this.elementToAdd = elementToAdd;
      this.size += 1;
      return this.elements = this.elements.concat(elementToAdd);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.size === 0) {
        return null;
      }
      this.size -= 1;
      return this.elements.splice(this.elements.length - 1, 1);
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.elements.length === 0) {
        return null;
      }
      return this.elements[this.elements.length - 1];
    }
  }]);

  return Stack;
}();

exports.default = Stack;