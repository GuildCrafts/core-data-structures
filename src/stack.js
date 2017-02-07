'use strict'

export default class Stack {
  constructor(){
    this.collector = []
    this.length()
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

    if(this.collector[0] === undefined) this.collector[0] = element
    else this.collector[this.length()] = element

    return this.length()
  }

  pop = () => {

    // removes the top element from the collector
    // returns the removed former top element
    if(this.length() === 0) return null
    else {
      let removed = this.collector[this.length()]
      //this.collector = this.collector.slice(this.length()-2)

    }
   }

}
