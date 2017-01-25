'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
  function Set() {
    _classCallCheck(this, Set);

    this.storage = [];
    this.index = 0;
  }

  _createClass(Set, [{
    key: 'add',
    value: function add(element) {
      this.storage[this.index++] = element;
    }
  }, {
    key: 'contain',
    value: function contain(element) {
      var isTrue = false;
      for (var i = 0; i < this.index; i++) {
        if (this.storage[this.index] === element) {
          // isTrue = true
        }
      }
      return isTrue;
    }
  }, {
    key: 'size',
    value: function size() {}
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      if (this.storage === []) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Set;
}();

exports.default = Set;