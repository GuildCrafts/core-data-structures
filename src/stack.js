'use strict'

export default class Stack {
  constructor(initialValues=[]) {
    this.elements = initialValues
    this.top = initialValues.length
  }
    push(value){
      this.elements[this.top] = value
      this.top++
    }
    pop(){

      if(this.top === 0){
        return null
      }

      let result = this.elements.slice(-1)
      this.elements.splice(-1)
      this.top--
      return result

    }
    peek(){
      if (this.top === 0){
        return null
      }
      return this.elements.slice(-1)
    }
    isEmpty(){
      if (this.top === 0 ){
        return true
      } else {
        return false
      }
    }
}
