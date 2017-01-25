'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.storage = [];
  }

  _createClass(Queue, [{
    key: 'enqueue',
    value: function enqueue(element) {
      return this.storage.push(element);
    }
  }, {
    key: 'length',
    value: function length() {
      return this.storage.length;
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.storage.length === 0) {
        return null;
      } else {
        return this.storage.pop(this.storage.length - 1);
      }
    }
  }, {
    key: 'front',
    value: function front() {
      if (this.storage.length === 0) {
        return null;
      } else {
        return this.storage[this.storage.length - 1];
      }
    }
  }, {
    key: 'back',
    value: function back() {
      if (this.storage.length === 0) {
        return null;
      } else {
        return this.storage[0];
      }
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      if (this.storage.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Queue;
}();

exports.default = Queue;