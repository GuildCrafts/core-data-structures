'use strict'

export default class Set {
  constructor(set) {
    this.set = set
  }

  add(data) {
    if( !this.contains(data) ){
      this.set[this.set.length] = data
    }
  }

  isEmpty() {
    return this.set.length === 0
  }

  contains(data) {
    if (this.set.indexOf(data) === -1){
      return false
    }
    return true
  }

  remove(data) {
    let indexOfData = this.set.indexOf(data)
    if (this.contains(data)) {
      this.set.splice(indexOfData, 1)
    }
  }

  forEach(func){
    for (let i of this.set) {
      func(i)
    }
  }

  size() {
    return this.set.length
  }

  union(otherSet) {
    let unionSet = this
    for(let item of otherSet.set) {
        unionSet.add(item)
    }
    return unionSet
  }

  intersect(otherSet) {
    let intersectSet = new Set([])
    for(let elem1 of this.set){
      for(let elem2 of otherSet.set){
        if(elem1=== elem2) {intersectSet.add(elem1)}
      }
    }
    return intersectSet
  }

  difference(otherSet) {
    let diffArray = this.set.filter(function(elem) {
      return otherSet.set.indexOf(elem) == -1;
    })
    let differenceSet = new Set(diffArray)

    return differenceSet
  }

  isSubset(otherSet) {
    return this.set.every(elem => otherSet.set.indexOf(elem) > -1)
  }

  clone() {
    return this
  }
}
