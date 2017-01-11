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

  // remove(element){
  //   if (this.set.indexOf(element) != -1) {
  //      this.set.pop(element)
  //    }
  // }
}
