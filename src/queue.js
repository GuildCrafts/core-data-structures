'use strict'

export default class Queue {
  constructor(){
    this.tail = null
    this.head = null
    this.lengthVal = 0
  }

  enqueue( item ){
    this.lengthVal++
    let temp = this.tail
    this.tail = {
      data: item,
      next: temp
    }
    if( temp == null ){
      this.head = this.tail
    }
  }

  dequeue(){
    if( this.lengthVal > 1 ){
      for( let current = this.tail; current.next.next !== null; current = current.next ){
        if( current.next.next == null ){
          this.head = current
          let temp = current.next
          current.next == null
          this.lengthVal --
          return temp.data
        }
      }
    } else if( this.lengthVal === 1) {
      let temp = this.head.data
      this.head = null
      this.tail = null

      this.lengthVal --
      return temp
    } else {
      return null
    }
  }

  front(){
    if( this.lengthVal > 0 ){
      return this.head.data
    } else {
      return null
    }
  }

  back(){
    if( this.lengthVal > 0 ){
      return this.tail.data
    } else {
      return null
    }
  }

  isEmpty(){
    return this.lengthVal <= 0
  }

  length(){
    return this.lengthVal
  }

}
