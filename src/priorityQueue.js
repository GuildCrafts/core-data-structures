function Node(data, weight) {
  this.data = data
  this.weight = weight
  this.next = null
}

export default class PriorityQueue {
  constructor() {
    this.size = 0
    this.head = null
  }



  enqueue(data, weight) {
    var node = new Node(data, weight)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      return this.size += 1
    } else if (!currentNode.next){
      if (currentNode.weight >= this.weight){
        node.next = currentNode
        return this.size += 1
      } else {
        currentNode.next = node
        return this.size += 1
      }
    } else {
      while (currentNode){
        if (currentNode.next.weight >= this.weight){
          node.next = currentNode.next
          currentNode.next = node
          return this.size += 1
        }
      }
    }
  }

  dequeue(data, weight) {
    var node = new Node(data, weight)
    var currentNode = this.head
    if (!currentNode) {
      return null
    } else {
      while (currentNode) {
        if (currentNode.next === null){
          node = currentNode
          this.size -= 1
          return node
        } else {
          currentNode = currentNode.next
        }
      }
    }
  }

  front(data, weight) {
    var node = new Node(data, weight)
    var currentNode = this.head
    if (!currentNode) {
      return null
    } else {
      while (currentNode) {
        if (currentNode.next === null){
          node = currentNode
          return node
        } else {
          currentNode = currentNode.next
        }
      }
    }
  }

  back(data, weight) {
    var node = new Node(data, weight)
    var currentNode = this.head
    if (!currentNode) {
      return null
    } else {
      node = currentNode
      return node
    }
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    if (this.size === 0){
      return null
    }
    return this.size
  }

}
