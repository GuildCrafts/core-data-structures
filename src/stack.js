'use strict'

export default class Stack {
  constructor(){
    this.head = null
    this.lengthVal = 0
  }

  push( item ){
    this.lengthVal++
    if( this.head === null) {
      this.head = {
        element: item,
        next: null
      }
    } else {
      let temp = this.head
      this.head = {
        element: item,
        next: temp
      }
    }
  }

  pop(){
    if( this.head !== null){
      this.lengthVal--
      const temp = this.head
      this.head = this.head.next
      return temp.element
    }
  }

  length(){
    return this.lengthVal
  }

  peek(){
    if( this.head !== null){
      return this.head.element
    } else {
      return null
    }
  }

  isEmpty(){
    return this.lengthVal <= 0
  }

}
