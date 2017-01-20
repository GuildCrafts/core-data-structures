"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function Stack() {
	this.arr = [];
	this.length = 0;
	this.push = push;
	function push(element) {
		this.arr[this.length++] = element;
	}
}

var stack = new Stack();
stack.push("foo");

exports.default = Stack;

// 'use strict'
// export default class Stack {
//   // your code here

// }