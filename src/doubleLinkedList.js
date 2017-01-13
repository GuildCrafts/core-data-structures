class Node {
  constructor( data, next, prev ){
    this.data = data
    this.next = null
    this.prev = null
  }
}

export default class doublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.index = 0
  }

  insert(data) {
    const node = new Node(data)
    let currentNode = this.tail
    let previousNode = null
    let nextData

    if(!currentNode){
      this.head = node
      this.tail = node
      this.index++
      return node
    }

    while(currentNode.next) {
      previousNodeData = currentNode.prev.data
      currentNode = currentNode.next
      currentNode.prev = previousNodeData




    }



    //
    // while(currentNode.next && currentNode.prev) {
    //   // console.log( '1st previous node ->' + previousNode + '1st currentNode->' + currentNode)
    //   previousNode = currentNode
    //   nextData = currentNode.next.data
    //   console.log(currentNode.next.data)
    //
    //     // console.log( '2nd previous node ->' + previousNode  + '2nd currentNode->' + currentNode)
    //   currentNode = currentNode.next
    //     // console.log( '3rd previous node ->' + previousNode  + '3rd currentNode->' + currentNode)
    //   currentNode.before = previousNode.data
    //     // console.log( '4th previous node ->' + previousNode  + '4th currentNode->' + currentNode)
    //     previousNode.next = currentNode.data
    //
    // }

    currentNode.next = node
    // console.log(currentNode);
    this.index++
    return node

  }
}
