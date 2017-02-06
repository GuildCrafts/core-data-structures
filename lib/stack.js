'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  // your code here
  function Stack() {
    _classCallCheck(this, Stack);

    this.myStack = [];
  }

  _createClass(Stack, [{
    key: 'length',
    value: function length(obj) {
      // iterate over the object
      // count the number of elements
      // return that number of elements
      obj.myStack;
      var counter = 0;
      var i = 0;
      while (obj.myStack[i] !== undefined) {}
    }
  }]);

  return Stack;
}();

exports.default = Stack;