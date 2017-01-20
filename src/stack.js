'use strict'

export default class Stack {

	constructor() {
		this.arr = []
		this.top = 0
	}

  push(element) {
    return this.arr.push(element)
  }

  pop() {
  	return this.arr.pop()
  }

  peek() {
  	return this.top > 0 ? this.arr[this.top-1] : null
  }

  isEmpty() {
  	return this.top === 0
  }

  length() {
  	return this.top
  }

}

