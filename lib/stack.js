'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.head = null;
    this.lengthVal = 0;
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(item) {
      this.lengthVal++;
      if (this.head === null) {
        this.head = {
          element: item,
          next: null
        };
      } else {
        var temp = this.head;
        this.head = {
          element: item,
          next: temp
        };
      }
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.head !== null) {
        this.lengthVal--;
        var temp = this.head;
        this.head = this.head.next;
        return temp.element;
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return this.lengthVal;
    }
  }, {
    key: 'peek',
    value: function peek() {
      if (this.head !== null) {
        return this.head.element;
      } else {
        return null;
      }
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.lengthVal <= 0;
    }
  }]);

  return Stack;
}();

exports.default = Stack;