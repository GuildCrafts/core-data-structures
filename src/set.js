export default class Set {
  constructor(){
    this.set = []
    this.index = 0
  }

  add(element) {
    if (this.set.indexOf(element) === -1){
      this.set.push(element)
      this.index++
    }
    else {
        return null
    }
  }

  isEmpty() {
      return this.index === 0  ? true : false
  }

  contains(element) {
    return this.set.indexOf(element) === -1 ? false : true
  }

  remove(element){
    if (this.set.indexOf(element) != -1) {
       this.set.splice(this.set.indexOf(element), 1)
       this.index--
     }
  }

  forEach(fn) {
    for (let i = 0; i < this.set.length; i++) {
     fn(this.set[i])
    }
  }

  size() {
    return this.index
  }

  // union(set2) {
  //   let resultSet = new Set
  //   let loop = function(this.set.add()){}
  //   resultSet.forEach(.add(this.set))
  //   resultSet.add(set2.set)
  //
  //   return resultSet
  //   }
}
