

Doubly_linked_list.prototype.insert = function(data) {
  let doubleNode = new DoubleNode(data)

  if(!this.head){
    this.size++
    return this.head = this.tail = doubleNode
  }

  let currentDoubleNode = this.head

  while(currentDoubleNode.next){
    currentDoubleNode = currentDoubleNode.next
  }

  currentDoubleNode.next = doubleNode
  this.size++

  let prevDoubleNode = this.head
  let i = 0
  while(prevDoubleNode && i < this.size-2){
    prevDoubleNode = prevDoubleNode.next
    i++
  }

  doubleNode.prev = prevDoubleNode
  return this.tail = doubleNode
}
