export default class Set {
  constructor() {
    this.length = 0
    this.elements = []
  }

  add(element) {
    this.length === 0
      ? this.elements.push(element)
      : this.elements[this.length] = element
    this.length += 1
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
      this.length -= 1
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

  intersection(arr) {
    const arr2 = this.elements
    const sorted_arr = arr2.concat(arr).sort()
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

  isSubset(secondSet) {
      return secondSet.elements.every((elements, index, array) => {
        return this.elements.indexOf(elements) !== -1;
      })
    }

  clone() {
    const sett = new Set()
    sett.length = this.length
    sett.elements = this.elements
    return sett
  }

}
