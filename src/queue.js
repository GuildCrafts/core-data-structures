import Node from './node'
export default class Queue {

  constructor() {
    this.front = null
    this.back = null
    this.count = 0
  }

  enqueue() {
   const node = new Node()
   if(this.front === null){
     this.front = node
     this.count++
   }

   while(this.front.next){
     this.front.next = node
     this.count++
   }
  }

  dequeue() {
    while(this.front) {
      this.front = this.front.next
      this.count--
    }
    return null
  }

  front() {
    if(this.front === null) {
      return null
    }
    return this.front
  }

  back() {
    if(this.back === null) {
      return null
    }
    return this.back
  }

  isEmpty() {
    if(this.count === 0) return true
  }

  length() {
    return this.count
  }
}
