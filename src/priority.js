'use strict'

class PriorityNode {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

export default class PriorityQueue {

    constructor(data) {
      this.head = null
      this.tail = null
      this.size = 0
    }


    enqueue( data, priority ) {
      let newNode = new PriorityNode(data, priority)

      if (this.size === 0) {
        // QUEUE IS EMPTY
        this.tail = newNode
        this.head = newNode
        this.size++
        return
      }

      if (this.tail.priority > newNode.priority) {
        // NEW NODE IS THE NEW TAIL
        newNode.next = this.tail
        this.tail = newNode
        this.size++
        return
      }

      if (newNode.priority > this.head.priority) {
        // NEW NODE IS THE NEW HEAD
        this.head.next = newNode
        this.head = newNode
        this.size++
        return
      }

      // SPLICE SOMEWHERE IN THE MIDDLE...
      let cursor = this.tail
      console.log('newNode', newNode)
      while(cursor) {
        if (
          newNode.priority > cursor.priority &&
          (cursor.next && newNode.priority > cursor.next.priority)
        ){
          newNode.next = cursor.next
          cursor.next = newNode
          this.size++
          return
        }
        cursor = cursor.next
      }

    }
}



  const pQueue = new PriorityQueue()

  pQueue.enqueue("pizza", 200)

  pQueue.enqueue("Beer", 198)

  pQueue.enqueue("cheese", 300)

  pQueue.enqueue("kale", 250)
