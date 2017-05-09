class Node {
  constructor() {
    this.data = null
    this.next = null
  }

  getData(data) {
    return data
  }

  setNext(data) {
    const currentNode = new Node()
    currentNode.data = data
      this.next = currentNode
      return this
    }

  getNext() {
    if (this.next === null) {
    }
    return this.next
  }

}

// const node = new Node()
// node.data = 15
// // console.log(node)
// node.setNext(14)
// // console.log(node)
// console.log(node.getNext().data)

export default Node