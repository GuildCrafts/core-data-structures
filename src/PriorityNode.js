'use strict'

export default class PriorityNode {
    constructor(data) {
      this.data = data
      this.next = null
      this.priority = null
    }

    getData() {
      return this.data
    }

    setNext(node) {
      this.next = node
      return this
    }

    getNext() {
      return this.next
    }
  }

  const pizzaNode = new PriorityNode({data: "pizza", priority: 100})
  const saladNode = new PriorityNode({data: "salad", priority: 50})
  }

  pizzaNode.getData()
  pizzaNode.getPriority()
  pizzaNode.setPriority(200)
  pizzaNode.setNext(saladNode)
  pizzaNode.getNext()
