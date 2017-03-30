import Node from './node'


export default class Queue {
	constructor() {
		this.front = null
		this.back = null
		this.size = 0
	}

	enqueue(data) {
		const newNode = new Node(data)
		if(this.size == 0) {
			this.front = newNode
			this.back = newNode
		} else {
			newNode.next = this.back
			this.back = newNode
		}
		this.size++
		this.toString()
	}

	length() {
		return this.size
	}

  dequeue() {
		let returnedData = null
		let cursor = this.back
		if(this.size >= 1) {
			returnedData = this.front.data
			if(this.size == 1){
				this.front = null
				this.back = null
				this.size = 0
			} else {
				while( cursor.next != this.front) { cursor = cursor.next }
				this.front = cursor
				cursor.next = null
			}
		}
		return returnedData
	}

	getFront() {
		let frontItem = null
			if (this.size > 0) {
				frontItem = this.front.data
			}
		return frontItem
	}

	getBack() {
		let backItem = null
			if (this.size > 0) {
				backItem = this.back.data
			}
		return backItem
	}

	isEmpty() {
		return this.size === 0
	}

	toString() {
		let queueString = ''
		for(let node = this.back; node != null; node = node.next){
			queueString = queueString + `${node.data}-->`
		}
		return queueString
	}

}
