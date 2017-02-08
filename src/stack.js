'use strict'

export default class Stack {
  constructor(){
    this.collector = []
  }

  length = () => {
    let counter = 0
    let indexValue = 0

    if(this.collector[indexValue] === undefined) {
      return 0
    }
    else {
      while (this.collector[indexValue] !== undefined) {
        counter ++
        indexValue ++
      }

      return counter
    }
  }

  push = (element) => {
    if(this.collector[0] === undefined) {
      return this.collector[0] = element
    }
    else this.collector[this.length()] = element

    return this.length()
  }

  pop = () => {
    if(this.length() === 0) {
      return null
    }
    else {
      let removed = this.collector[this.length()-1]
      this.collector.length = this.collector.length-1
      return removed
    }
   }

  peek = () => {
    if(this.length() === 0) return null
    else {
      let topElement = this.collector[this.length()-1]
    }

    return topElement
  }

  isEmpty = () => {
    if (this.length() === 0) {
      return true
    }
    else {
      return false
    }
  } 

}
