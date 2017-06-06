export default class Node {

  constructor(data) {
    this.data = {data: data}
    this.next = undefined
  }

  getData() {
  return this.data.data
  }

  setNext(Node) {
  this.next = Node
  return Node
  }

  getNext(){
    if(this.next === undefined) {
      return null
    }
    return this.next
  }
}
