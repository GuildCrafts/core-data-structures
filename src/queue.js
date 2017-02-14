export default class Queue {
  constructor() {
    this.size = 0
    this.elements = []
  }

//queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.
  enqueue(elementToAdd) {
    this.elementToAdd = elementToAdd
    this.size += 1
    return this.elements = this.elements.concat(elementToAdd)
  }

//queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
  dequeue() {
    if (this.size === 0){
      return null
    } this.size -= 1
      return this.elements.splice(0, 1)
  }

//queue.front()        // returns the front element in queue or null if the queue is empty.
  front() {
    if (this.size === 0){
      return null
    } return this.elements[0]
  }


//queue.back()         // returns the back element in the queue or null if the queue is empty.
  back() {
    if (this.size === 0){
      return null
    } return this.elements[this.elements.length - 1]
  }

//queue.isEmpty()      // returns true if the queue is empty or false if not.
  isEmpty() {
    return this.size === 0
  }

//queue.length()       // returns the number of elements in the queue
  length() {
    return this.size
  }

}
