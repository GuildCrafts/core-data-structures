export default class PriorityQueue {
  constructor() {
    this.size = 0
    this.obj = {}
  }



//pQueue.enqueue("pizza", 100) // adds an element with priority (number) to the back of the queue.
  enqueue(name, value) {
    this.size += 1
    Object.defineProperty(this.obj, name, {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    })
    return this.obj = this.obj
  }

//pQueue.dequeue()             // returns and removes the front element (highest priority) in the queue or null if the queue is empty.
  dequeue() {

  }

//pQueue.front()               // returns the front element (highest priority) in the queue or null if the queue is empty.
  front() {

  }

//pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
  back() {

  }

//pQueue.isEmpty()             // returns true if the queue is empty or false if not.
  isEmpty() {
    return this.size === 0
  }

//pQueue.length()              // returns the number of elements in the queue.
  length() {
    return this.size
  }

}
