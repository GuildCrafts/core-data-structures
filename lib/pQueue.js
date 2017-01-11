'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PQueue = function () {
  function PQueue() {
    _classCallCheck(this, PQueue);

    this._length = 0;
    this._front = null;
    this._back = null;
  }

  _createClass(PQueue, [{
    key: 'enqueue',
    value: function enqueue(item, priority) {
      priority = priority ? priority : 1;
      this._length++;
      if (this._front == null) {
        this._front = {
          data: item,
          priority: priority,
          next: null
        };
        this._back = this._front;
      } else {
        var selector = this._back;
        var last = null;
        if (priority <= this._back.priority) {
          var temp = this._back;
          this._back = {
            data: item,
            priority: priority,
            next: temp
          };
        } else {
          var newFront = false;
          while (priority > selector.priority) {
            last = selector;
            selector = selector.next;

            // We've reached the end of the list; current item's priority is new highest.
            if (selector == null) {
              newFront = true;
              break;
            }
          }
          last.next = {
            data: item,
            priority: priority,
            next: selector
          };
          if (newFront) {
            this._front = last.next;
          }
        }
      }
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this._length === 0) {
        return null;
      } else if (this._length === 1) {
        this._length--;
        var temp = this._front;
        this._front = null;
        this._back = null;
        return temp.data;
      } else {
        this._length--;
        var selector = this._back;
        while (selector.next.next !== null) {
          selector = selector.next;
        }
        var _temp = selector.next;
        this._front = selector;
        selector.next = null;
        return _temp.data;
      }
    }
  }, {
    key: 'front',
    value: function front() {
      return this._front == null ? null : this._front.data;
    }
  }, {
    key: 'back',
    value: function back() {
      return this._back == null ? null : this._back.data;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this._length == 0;
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }]);

  return PQueue;
}();

exports.default = PQueue;