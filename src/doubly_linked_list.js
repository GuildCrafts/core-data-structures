'use strict'

function  Doubly_linked_list() {
  this.size = 0
  this.head = null
  this.tail = null
}

function  DoubleNode(data) {
  this.data = data
  this.next = null
  this.prev = null
}

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

  this.size++
  currentDoubleNode.next = doubleNode
  currentDoubleNode = doubleNode.prev
  return this.tail = doubleNode
}

Doubly_linked_list.prototype.size = function() {
  return this.size
}

Doubly_linked_list.prototype.showAll = function(){
  let displayArray = []

  if(!this.head){
    return '*list is empty*'
  }

  let currentDoubleNode = this.head

  while(currentDoubleNode.next != null){
    displayArray.push(currentDoubleNode.data)
    currentDoubleNode = currentDoubleNode.next
  }

  displayArray.push(currentDoubleNode.data)
  return displayArray
}


Doubly_linked_list.prototype.getHeadNode = function(){
  return this.head
}

Doubly_linked_list.prototype.getTailNode = function(){
  return this.tail
}

Doubly_linked_list.prototype.contains = function(data) {
  let currentDoubleNode = this.head

  while(currentDoubleNode.next != null){
    if(currentDoubleNode.data == data){
      return 'true'
    }
    currentDoubleNode = currentDoubleNode.next
  }
  return 'false'
}

Doubly_linked_list.prototype.find = function(dataSubstr){
  let currentDoubleNode = this.head

  if(!this.head){
    return '-1'
  }

  while(currentDoubleNode.next){
    if(currentDoubleNode.data.includes(dataSubstr)){
      console.log(dataSubstr+' found')
      return currentDoubleNode.data //
    }
    currentDoubleNode = currentDoubleNode.next
  }
  console.log(dataSubstr+' not found')
  return '-1'
}

Doubly_linked_list.prototype.clear = function() {
  this.head = null
  this.size = 0
  return 'list cleared'
}

Doubly_linked_list.prototype.isEmpty = function() {
  return this.size > 0 ? 'false' : 'true'
}

Doubly_linked_list.prototype.remove = function(data) {
  let checkSize = 0
  let currentNode = this.head
  let sizeMinus1 = this.size - 2
  while(currentNode && checkSize < sizeMinus1){
    currentNode = currentNode.next
    checkSize++
  }
  currentNode.next = null
  this.tail = currentNode
  this.size--
  return 'removed tail'
}

Doubly_linked_list.prototype.insertFirst = function(data) {
  let doubleNode = new DoubleNode(data)
  doubleNode.next = this.head
  this.size++
  return this.head = doubleNode
}

Doubly_linked_list.prototype.insertAfter = function(after, data) {
  let doubleNode = new DoubleNode(data)
  this.tail.next = doubleNode
  this.tail = doubleNode
  this.size++
}

Doubly_linked_list.prototype.removesFirst = function() {
  let doubleNode = this.head.next
  this.head = doubleNode
  this.size--
  return 'removed first doubleNode'
}

Doubly_linked_list.prototype.insertBefore = function(zero_based_position, data) {

  if(isNaN(zero_based_position)){
    return 'enter an integer value for the zero-based index zero_based_position'
  }

  if(zero_based_position == 0 && !this.tail){
    let node = new DoubleNode(data)
    node.next = this.head
    this.size++
    return this.head = node
  } else if(zero_based_position == 0 && this.tail){
    let node = new DoubleNode(data)
    node.next = this.head
    this.size++
    return this.head = this.tail = node
  }

  let currentNode = this.head
  let i = 0

  while(currentNode && i < zero_based_position){
    currentNode = currentNode.next
    i++
  }

  const afterNode = currentNode

  let newNode = this.head
  let y = 0
  while(newNode && y < zero_based_position-1){
    newNode = newNode.next
    y++
  }

  const priorToNode = newNode

  if(zero_based_position > this.size-1){ // this.size here accounts for zero-based position count
    let node = new DoubleNode(data)
    this.size++
    node.next = null
    node.prev = priorToNode
    priorToNode.next = node
    this.tail = node
    return 'inserted at tail'
  }

  let node = new DoubleNode(data)
  this.size++
  node.next = afterNode
  priorToNode.next = node

  return 'inserted'
}


Doubly_linked_list.prototype.getPrevious = function(zero_based_position) {
  // return previous num node from last
  if(isNaN(zero_based_position)){
    return 'enter an integer value for the zero-based index zero_based_position'
  }

  let currentNode = this.head
  let i = 0

  while(currentNode && i < zero_based_position){
    currentNode = currentNode.next
    i++
  }
  // return currentNode.data
  return currentNode.prev

}


// Doubly_linked_list.prototype.setPrevious = function(zero_based_position) {
  // set the previous node to some numbered node
//}



let myDLL = new Doubly_linked_list
console.log('myDLL.insert("zion") => '+myDLL.insert("zion"))
console.log('myDLL.insert("matrix") => '+myDLL.insert("matrix"))
console.log('myDLL.size => '+myDLL.size)
console.log('myDLL.showAll() => '+myDLL.showAll())
console.log('myDLL.contains("zion") => '+myDLL.contains("zion"))
console.log('myDLL.find("z") => '+myDLL.find("z"))
console.log('myDLL.isEmpty() => '+myDLL.isEmpty())
// console.log('myDLL.remove() => '+myDLL.remove())
console.log('myDLL.insert("eclipse") => '+myDLL.insert("eclipse"))
console.log('myDLL.showAll() => '+myDLL.showAll())
console.log('myDLL.tail.data => '+myDLL.tail.data)
console.log('myDLL.insertBefore(3,"moonlight") => '+myDLL.insertBefore(3,"moonlight"))
console.log('myDLL.showAll() => '+myDLL.showAll())
console.log('myDLL.size => '+myDLL.size)
console.log('myDLL.tail.data => '+myDLL.tail.data)
console.log('myDLL.getPrevious(0) => '+myDLL.getPrevious(0))

// console.log('myDLL.clear() => '+myDLL.clear())
// console.log('myDLL.showAll() => '+myDLL.showAll())
