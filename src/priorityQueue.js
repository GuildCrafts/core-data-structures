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
  }
  back(){
    // returns the back element (lowest priority) in the queue or null if the queue is empty.
  }
  dequeue(){
    // returns and removes the front element in the queue or null if the queue is empty.[[1, 1000],[12, 5]]
    if(this.index === 0){
      return null
    }
    else {
      return this.queue.pop()
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
