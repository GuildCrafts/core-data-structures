'use strict'

export default class PQueue {
  constructor(){
    this._length = 0
    this._front = null
    this._back = null
  }

  enqueue( item, priority ){
    priority = priority ? priority : 1
    this._length++
    if( this._front == null ){
      this._front = {
        data: item,
        priority: priority,
        next: null
      }
      this._back = this._front
    } else {
      let selector = this._back
      let last = null
      if( priority <= this._back.priority ){
        let temp = this._back
        this._back = {
          data: item,
          priority: priority,
          next: temp
        }
      } else {
        let newFront = false
        while( priority > selector.priority ){
          last = selector
          selector = selector.next

          // We've reached the end of the list; current item's priority is new highest.
          if(selector == null){
            newFront = true
            break
          }
        }
        last.next = {
          data: item,
          priority: priority,
          next: selector
        }
        if(newFront) {
          this._front = last.next
        }
      }
    }
  }

  dequeue(){
    if( this._length === 0){
      return null
    } else if( this._length === 1 ){
      this._length --
      let temp = this._front
      this._front = null
      this._back = null
      return temp.data
    } else {
      this._length --
      let selector = this._back
      while( selector.next.next !== null ){
        selector = selector.next
      }
      let temp = selector.next
      this._front = selector
      selector.next = null
      return temp.data
    }
  }

  front(){
    return this._front == null ? null : this._front.data
  }

  back(){
    return this._back == null ? null : this._back.data
  }

  isEmpty(){
    return this._length == 0
  }

  length(){
    return this._length
  }
}
