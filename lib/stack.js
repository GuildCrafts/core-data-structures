"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.storage = "";
    this._length = 0;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(value) {
      this.storage = this.storage.concat("***", value);
      this._length++;
    }
  }, {
    key: "pop",
    value: function pop() {
      var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
      this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
      this._length--;
      return str;
    }
  }, {
    key: "size",
    value: function size() {
      return this._length;
    }

    // peek() {
    //   return this.storage.charAt(3)
    // }

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (this._length == 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "length",
    value: function length() {
      return this._length;
    }
  }]);

  return Stack;
}();

// const stack = new Stack()
// stack.push("RedBeans")
// console.log(stack.length())

exports.default = Stack;