export default class Set {
  constructor() {
    this.length = 0
    this.elements = []
  }

  add = (value) => {
    if(!this.contains(value)){
      this.elements.push(value)
      this.length += 1
    }
    else{
      throw Error ('element is already in the set')
    }
  }

  isEmpty = () => this.length === 0

  contains = (value) => {
    for (let i = 0; i < this.length; i++) {
      if (this.elements[i] === value) {
        return true
      }
    }
    return false
  }

  remove = (value) => {
    if(this.contains(value)){
      let removeIndex = 0
      for(let i = 0; i < this.length; i++){
        if(this.elements[i] === value){
          removeIndex = i
        }
      }
      this.elements.splice(removeIndex, 1)
      this.length -= 1
    }
  }

  forEach = passedInFunction => {
    const setSize = this.length
    for (let i = 0; i < setSize; i++) {
      passedInFunction(this.elements[i])
    }
  }

  size = () => this.length

  union = (otherSet) => {
    let newSet = new Set()
    for(let i = 0; i < this.length; i++){
      newSet.add(this.elements[i])
    }
    for(let i = 0; i < otherSet.length; i++) {
      if(!newSet.contains(otherSet.elements[i])) {
        newSet.add(otherSet.elements[i])
      }
    }
    return newSet
  }

  intersect = (otherSet) => {
    let newSet = new Set()
    for(let i = 0; i < this.length; i++){
      newSet.add(this.elements[i])
    }
    for(let i = 0; i < this.length; i++) {
      if(!newSet.contains(otherSet.elements[i])) {
        newSet.remove(otherSet.elements[i])
      }
    }
    return newSet
  }

  difference = (otherSet) => {
    let newSet = new Set()

    for(let i = 0; i < this.length; i++) {
      if(!otherSet.contains(this.elements[i])) {
        newSet.add(this.elements[i])
        }
      }
    return newSet
  }

  isSubset = (otherSet) => {
    let count = 0
    for(let i = 0; i < this.size(); i++){
      if(otherSet.contains(this.elements[i])){
        count += 1
      }
    }
    return count === this.size()
  }


  clone = () => {
       let newSet = new Set()
       newSet = this
       return newSet
    }
}
