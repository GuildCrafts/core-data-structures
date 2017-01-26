'use strict'

export default class Set {
  constructor(initialValues=[]) {
    this.elements = initialValues
  }

  add(value) {
    if (this.elements.indexOf(value) === -1) {
      this.elements[this.elements.length] = value
      return this.elements
    }
    return false
  }

  isEmpty() {
    if (this.elements.length === 0 ){
      return true
    }
    return false


  }

  contains(value) {
    if (this.elements.indexOf(value) > 0) {
      return true
    }
    return false
  }

  remove(value) {
    if (this.elements.indexOf(value) > 0) {
      return this.elements.splice(this.elements.indexOf(value),1)
    }
    return "The value to remove does not exist"
  }

  forEach(func) {
    this.elements = this.elements.map(func)
    return this.elements
  }

  size() {
    let count = 0
    for (let key in this.elements) {
        count++
    }
    return count
  }

  union(secondSet) {
    let unioned = this.elements
    for (var elem of secondSet.elements)
      if (unioned.indexOf(elem) === -1) {
        unioned[unioned.length] = elem
      }
    var unique = unioned.filter(function(element, index, self) {
      return index == self.indexOf(element);
    })
    return unique
  }

  intersect(secondSet) {
    let intersected = []
    for (var elem of secondSet.elements)
      if (this.elements.indexOf(elem) > 0) {
        intersected[intersected.length] = elem
      }
    var unique = intersected.filter(function(element, index, self) {
      return index == self.indexOf(element);
    })
    return unique
  }

  difference(secondSet) {
    let differences = []
    for (var elem of this.elements)
      if (secondSet.elements.indexOf(elem) === -1 ) {
        differences[differences.length] = elem
      }
    for (var elem of secondSet.elements)
      if (this.elements.indexOf(elem) === -1 ) {
        differences[differences.length] = elem
      }
    var unique = differences.filter(function(element, index, self) {
      return index == self.indexOf(element);
    })
    return unique
  }

  isSubset(secondSet) {
    return secondSet.elements.every((elements, index, array) => {
      return this.elements.indexOf(elements) !== -1;
    })
  }

  clone() {
    let newSet = new Set(this.elements)
    return newSet.elements
  }

}
