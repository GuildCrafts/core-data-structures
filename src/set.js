'use strict'

export default class Set {
  constructor(){
    this.storage = []
    this.index = 0
  }

  add(element){
    if(!this.contains(element)){
      this.storage[this.index++] = element
    }
  }

  contains(element){
    for(let i = 0; i < this.index; i++){
      if(this.storage[i] === element){
        return true
      }
    }
    return false
  }


  size(){
    return this.index
  }


  isEmpty() {
    if(this.index === 0){
      return true
    }
    else{
      return false
    }
  }

  remove(element){
    for(let i = 0; i < this.index; i++){
      if(this.storage[i] === element){
        this.storage.slice(i)
        //refactor slice!!!!
        this.index--
      }
    }
  }

  union(element){
    for(let i = 0; i < element.length; i++){
    //refactor .length!!!
      if(!this.contains(element[i])){
        this.add(element[i])
      }
    }
  }


}
