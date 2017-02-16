export default class Queue {
  constructor() {
    this.arr = [];
    this.total = 0;
}
  enqueue(element) {
    this.arr[this.total++] = element
  }

  dequeue() {
    if(this.total == null) {
      return null
    }
   while( this.arr.shift() ) {
      this.arr[--this.total]
    }
   return this.arr
  }

  length() {
    return this.total
  }

  front() {
    if(this.total = 1 && this.total == null) {
      return null
    }else{
      this.arr.shift()
      return this.arr
    }
  }

  back() {
    if(this.total-1 == null) {
      return null
    }else{
      this.arr.pop()
      return this.arr
    }
  }


  isEmpty() {
    if(this.total > 0) {
    return true
  } else{
    return false
    }
  }

}
