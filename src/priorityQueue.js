export default class priorityQueue {

  constructor(){
    this.queue = []
    this.index = 0
  }

  enqueue(item, priority){
    // adds an element with priority (number) to the back of the queue.
    this.queue[this.index++] = [item, priority];
    this.queue.sort(function(a, b){
      return a[0] - b[0]
    })
  }
  front(){
    // returns the front element (highest priority) in queue or null if the queue is empty.
    if(this.index === 0) {
     return null
    }
    else {
     return this.queue[0][0]
    }
  }

  back(){
    // returns the back element (lowest priority) in the queue or null if the queue is empty.
    return this.index > 0 ? this.queue[this.index - 1][0] : null
  }
  dequeue(){
    // returns and removes the front element in the queue or null if the queue is empty.[[1, 1000],[12, 5]]
    if(this.index === 0){
      return null
    }
    else {
      this.queue[this.index--]
      return this.queue.shift(0)
    }
  }
  isEmpty(){
    // returns true if the queue is empty or false if not.
    if(this.queue = [])
    return true;
  }
  length(){
    // returns the number of elements in the queue.
    return this.queue.length
  }
}
