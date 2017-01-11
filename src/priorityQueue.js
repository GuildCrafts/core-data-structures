import Node from './node'


export default class PriorityQueue {
	constructor() {
		this.front = null
		this.back = null
		this.size = 0
	}

//insert by priority
	enqueue(data, priority) {
		const newNode = new Node(data, priority)
    let cursor = this.back
		if(this.size == 0) {
			this.front = newNode
			this.back = newNode
		} else {
			if(this.front.priority < newNode.priority){
				this.front.next = newNode
				this.front = newNode
			} else if( this.back.priority > newNode.priority ){
				newNode.next = this.back
				this.back = newNode
			} else {
				while(cursor.next.priority < newNode.priority ) { cursor = cursor.next }
				newNode.next = cursor.next
				cursor.next = newNode
			}
		}
		this.size++
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
			queueString = queueString + `${node.data}:${node.priority}-->`
		}
		console.log(queueString)
	}

}
