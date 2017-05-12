"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.storage = {};
    this._count = 0;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(value) {
      this.storage[this._count] = value;
      this._count++;
    }
  }, {
    key: "pop",
    value: function pop() {
      var value = this.storage[--this._count];
      delete this.storage[this._count];
      if (this._count < 0) {
        this._count = 0;
      }
      return value;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.storage[this._count - 1];
    }
  }, {
    key: "size",
    value: function size() {
      return this._count;
    }
  }]);

  return Stack;
}();

exports.default = Stack;