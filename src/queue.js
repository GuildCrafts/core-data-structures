export default class Queue {
	constructor() {
    this.queue = []
	}
  enqueue(data) {
    this.queue[this.queue.length] = data
  }
  length() {
    return this.queue.length
  }

  dequeue() {
    let removedItem = null
       if (this.queue.length > 0) {
        removedItem = this.queue.splice(0, 1)[0]
       }

    return removedItem
  }


  front() {
    let frontItem = null
      if (this.queue.length > 0) {
        frontItem = this.queue[0]
      }

    return frontItem
  }

  back() {
    let backItem = null
      if (this.queue.length > 0) {
        backItem = this.queue[this.queue.length -1]
      }

    return backItem
  }


  isEmpty() {
    return this.queue.length === 0
  }

}
