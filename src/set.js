'use strict'

export default class Set {
  constructor() {
    this.set = []
  }

  add(value) {
    const match = this.set.find(member => member === value)
    if(!match) this.set.push(value)
  }

  isEmpty() {
    const empty = this.set.length === 0 ? true : false
    return empty
  }

  contains(value) {
    const match = this.set.find(member => member === value)
    if(!match) return false
    return true
  }

  remove(value) {
    const match = this.set.find(member => member === value)
    const index = this.set.indexOf(match)
    this.set.splice(index, 1)
  }

  forEach(callback) {
    const newSet = this.set.map(member => callback(member)) 
    this.set = newSet
  }

  size() {
    return this.set.length
  }

  union(otherSet) {
    let newSet = this.set
    otherSet.set.forEach((member) => {
      let match = newSet.find(value => member === value)
      if(!match) newSet.push(member)
    })
    return newSet
  }

  intersect(otherSet) {
    let newSet = []
    otherSet.set.forEach((member) => {
      let match = this.set.find(value => member === value)
      if(match) newSet.push(member)
    })
    return newSet
  } 

  difference(otherSet) {
    let newSet = this.set
    otherSet.set.forEach((member) => {
      let match = newSet.find(value => member === value)
      let index = newSet.indexOf(match)
      if(match) newSet.splice(index, 1)
    })
    return newSet
  }

  isSubset(otherSet) {
    let subset = true
    this.set.forEach((member) => {
      let match = otherSet.set.find(value => member === value)
      if(!match) subset = false 
    })
    return subset
  }

  clone() {
    let newSet = []
    this.set.forEach(value => newSet.push(value))
    return newSet
  }

}