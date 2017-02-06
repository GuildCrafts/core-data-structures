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
        indexValue++
      }
      return counter
    }
  }

}
