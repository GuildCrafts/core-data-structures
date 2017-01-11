'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.tail = null;
    this.head = null;
    this.lengthVal = 0;
  }

  _createClass(Queue, [{
    key: 'enqueue',
    value: function enqueue(item) {
      this.lengthVal++;
      var temp = this.tail;
      this.tail = {
        data: item,
        next: temp
      };
      if (temp == null) {
        this.head = this.tail;
      }
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.lengthVal > 1) {
        for (var current = this.tail; current.next.next !== null; current = current.next) {
          if (current.next.next == null) {
            this.head = current;
            var temp = current.next;
            current.next == null;
            this.lengthVal--;
            return temp.data;
          }
        }
      } else if (this.lengthVal === 1) {
        var _temp = this.head.data;
        this.head = null;
        this.tail = null;

        this.lengthVal--;
        return _temp;
      } else {
        return null;
      }
    }
  }, {
    key: 'front',
    value: function front() {
      return this.lengthVal > 0 ? this.head.data : null;
    }
  }, {
    key: 'back',
    value: function back() {
      return this.lengthVal > 0 ? this.tail.data : null;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.lengthVal <= 0;
    }
  }, {
    key: 'length',
    value: function length() {
      return this.lengthVal;
    }
  }]);

  return Queue;
}();

exports.default = Queue;