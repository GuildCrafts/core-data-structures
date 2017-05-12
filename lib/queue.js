'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue(capacity) {
    _classCallCheck(this, Queue);

    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }

  _createClass(Queue, [{
    key: 'enqueue',
    value: function enqueue(value) {
      if (this.length() < this._capacity) {
        this._storage[this._tail++] = value;
        return this.length();
      }
      return 'Max capacity reached. Remove element before adding one';
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      var element = this._storage[this._head];
      delete this._storage[this._head];
      if (this._head < this._tail) this._head++;
      return element;
    }
  }, {
    key: 'length',
    value: function length() {
      return this._tail - this._head;
    }
  }, {
    key: 'front',
    value: function front() {
      if (this.isEmpty()) {
        return null;
      }
      return this._storage[0];
    }
  }, {
    key: 'back',
    value: function back() {
      if (this.isEmpty()) {
        return null;
      }
      return this._storage[Object.keys(this._storage)[Object.keys(this._storage).length - 1]];
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      for (var prop in this._storage) {
        if (this._storage.hasOwnProperty(prop)) return false;
      }
      return true;
    }
  }]);

  return Queue;
}();

exports.default = Queue;