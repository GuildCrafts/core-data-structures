class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
  data() {return this.data}
  next() {return this.next}
}


export default class linkedList {
  constructor(){
    this.head = null
    this.index = 0
  }

  insert(data){
    const node = new Node(data)
    let currentNode = this.head

    if (!currentNode) {
      this.head = node
      this.index++
      return node
    }

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node

    this.index++
    return node
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    let currentNode = this.head

    while(currentNode.next){
      currentNode = currentNode.next
    }
    return currentNode
  }

  size() {
    return this.index
  }
}
