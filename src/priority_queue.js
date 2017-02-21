'use strict'

export default class Priority_queue {
  constructor() {
    this.sequence = []
    this.count = 0
  }

  enqueue(element) {
    this.sequence[ this.count++ ] = element
  }

  dequeue() {
    return this.count > 0 ? this.sequence.splice(0, 1)[0] : null
  }

  front() {
    if( this.count !== 0 ){
      let smallest = this.sequence[0].priority, value

      for( let i = 1; i < this.count; i++ ){
        if( this.sequence[i].priority < smallest ){
          smallest = this.sequence[i].priority
          value = this.sequence[i]
        }
      }
      return value
    }else{ return null }
  }

  back() {
    if( this.count !== 0 ){
      let largest = this.sequence[0].priority, value

      for( let i = 1; i < this.count; i++ ){
        if( this.sequence[i].priority > largest ){
          largest = this.sequence[i].priority
          value = this.sequence[i]
        }
      }
      return value
    }else{return null}
  }


  isEmpty() {
    return this.count === 0 ? true : false
  }

  length() {
    return this.count
  }

}
