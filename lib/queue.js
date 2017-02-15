"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.size = 0;
    this.elements = [];
  }

  //queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.


  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(elementToAdd) {
      this.elementToAdd = elementToAdd;
      this.size += 1;
      return this.elements = this.elements.concat(elementToAdd);
    }

    //queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.

  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.size === 0) {
        return null;
      }this.size -= 1;
      return this.elements.splice(0, 1);
    }

    //queue.front()        // returns the front element in queue or null if the queue is empty.

  }, {
    key: "front",
    value: function front() {
      if (this.size === 0) {
        return null;
      }return this.elements[0];
    }

    //queue.back()         // returns the back element in the queue or null if the queue is empty.

  }, {
    key: "back",
    value: function back() {
      if (this.size === 0) {
        return null;
      }return this.elements[this.elements.length - 1];
    }

    //queue.isEmpty()      // returns true if the queue is empty or false if not.

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }

    //queue.length()       // returns the number of elements in the queue

  }, {
    key: "length",
    value: function length() {
      return this.size;
    }
  }]);

  return Queue;
}();

exports.default = Queue;