export default class Node {

  constructor(data) {
    this.data = data
    this.next = null
  }

  getData() {
  return this.data
  }

  setNext(Node) {
  this.next = Node
  return Node
  }

  getNext(){
    return this.next
  }
}
