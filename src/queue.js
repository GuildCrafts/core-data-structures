export default class Queue {
  constructor () {
    this.queue = [ ];
    this.index = 0
  }

  enqueue(item) {
    this.queue[this.index++] = item
  }

  length(){
    return this.index
  }

  dequeue(){
    this.queue[this.index--]
    return this.queue.shift(0)

  }

  front(){
    //ask jrob
    if(this.index === 0) {
     return null
    }
    else {
     return this.queue[0]
    }
  }

  back() {
    // if(this.index === 0) {
    //  return null
    // }
    // else {
    //  return this.queue[this.index - 1]
    // }

    return this.index > 0 ? this.queue[this.index - 1] : null
  }

  isEmpty() {
    if(this.index === 0) {
     return true
    }
  }
}
