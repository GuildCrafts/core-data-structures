export default class Set {
  constructor() {
    this.length = 0
    this.elements = []
  }

  add(element) {
    this.length += 1
    this.elements = this.elements.concat(element)
  }

  isEmpty() {
    return this.length === 0
  }

  contains(searchTerm) {
    return this.elements.includes(searchTerm)
  }

  remove(searchTerm) {
    const array = this.elements
    const index = array.indexOf(searchTerm)
    if (!array.includes(searchTerm)) {
      return null
    } else if (index >= 0){
      array.splice(index, 1)
    }
  }

  forEach(sett, callback) {
    for (var i in sett){
      sett[i] = callback(sett[i])
    }
  }

  size() {
    return this.length
  }

  setUnion(arr2) {
    const arr1 = this.elements
    const arr = arr1.concat(arr2).sort()
    for (var i=0; i<arr.length; i++){
      if (arr[i] === arr[i+1]){
        arr.splice(arr[i], 1)
      }
    }
    this.length = arr.length
    return arr
  }

  intersection(arr2) {
    const arr1 = this.elements
    const sorted_arr = arr1.concat(arr2).sort()
    const results = []
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    this.length = results.length
    return results
  }

  difference(arr1){
    const arr2 = this.elements
    const concatSortArray = arr1.concat(arr2).sort()
    const results = []
    for (var i=0; i<concatSortArray.length; i++){
      arr1.includes(concatSortArray[i])
        ? null
        : results.push(concatSortArray[i])
    }
    this.length = results.length
    return results
  }

  isSubset(otherSet) {
    const arr = this.elements
    if(typeof otherSet === String || Number) {
      for (var i = 0; i<otherSet.length; i++){
        if (arr[i] = otherSet) {
          return true
        } else {
          return false
        }
      }
    } else if (otherSet.isArray()){
      for (var j = 0; j<otherSet.length; j++){
        if (arr[j] === otherSet){
          return true
        } else {
          return false
        }
      }
    }
  }

  clone() {
    const sett = new Set()
    sett.length = this.length
    sett.elements = this.elements
    return sett
  }

}
