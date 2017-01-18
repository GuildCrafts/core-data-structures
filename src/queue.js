'use strict'

export default class Queue {
  constructor(initialValues=[]) {
    this.elements = initialValues
    this.first = initialValues[0]
    this.last = initialValues.length
  }
    enqueue(value){
      this.elements[this.last] = value
      this.last++
    }

    dequeue(){
      if(this.elements.length === 0 ){
        return null
      }
      let result = this.elements.slice(0, 1)
      this.elements.splice(0,1)
      return result
    }

    front(){
      if(this.elements.length === 0){
        return null
      } else {
        return this.elements[0]
      }
    }

    back(){
      if(this.elements.length === 0){
        return null
      } else {
        return this.elements[this.last - 1]
      }
    }

    isEmpty(){
      if (this.elements.length === 0 ){
        return true
      } else {
        return false
      }
    }

    length(){
      let count = 0
      for (var key in this.elements) {
          count++
      }
      return count
    }

}
