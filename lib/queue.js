"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.size = 0;
    this.elements = [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(elementToAdd) {
      this.elementToAdd = elementToAdd;
      this.size += 1;
      this.elements = [].concat(_toConsumableArray(this.elements), [elementToAdd]);
      return this.elements;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.size === 0) {
        return null;
      }this.size -= 1;
      return this.elements.splice(0, 1)[0];
    }
  }, {
    key: "front",
    value: function front() {
      if (this.size === 0) {
        return null;
      }return this.elements[0];
    }
  }, {
    key: "back",
    value: function back() {
      if (this.size === 0) {
        return null;
      }return this.elements[this.elements.length - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "length",
    value: function length() {
      return this.size;
    }
  }]);

  return Queue;
}();

exports.default = Queue;