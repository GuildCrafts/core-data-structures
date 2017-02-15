'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack(data) {
    _classCallCheck(this, Stack);

    this.top = 0;
    this.data = data;
    this.element = [];
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(data) {
      this.top++;
      this.element[this.top] = data;
    }
  }, {
    key: 'pop',
    value: function pop() {
      return this.top > 0 ? this.element.splice(this.top, 1)[0] : null;
    }
  }, {
    key: 'length',
    value: function length() {
      return this.top;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.top === 0 ? true : false;
    }
  }, {
    key: 'peek',
    value: function peek() {
      return this.top > 0 ? this.element[this.top--] : null;
    }
  }]);

  return Stack;
}();

exports.default = Stack;