export default class Node{

  constructor(data) {
    this.data = data
    this.next = null
  }

  getData() {
    return this.data
  }

  setNext(newNext){
    this.next = newNext
    return this
  }

  getNext(){
    if (this.next) {
      return this.next
    }
    return null
  }
}
 
