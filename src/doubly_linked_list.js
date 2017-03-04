class DoubleNode {
  constructor(data){
    this.data = data
    this.next = null
    this.prev = null
  }
}


export default class Doubly_linked_list {

  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }


  insert(data) {

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
    this.tail = doubleNode
    return doubleNode.data
  }


  length() {
    return this.size
  }

  showAll(){
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


  getHeadNode(){

    if(!this.head){
      return '*list is empty*'
    }

    return this.head
  }

  getTailNode(){

    if(!this.head){
      return '*list is empty*'
    }

    return this.tail.data
  }

  contains(data) {
    if(!this.head){
      return '*list is empty*'
    }

    let currentDoubleNode = this.head

    while(currentDoubleNode.next != null){
      if(currentDoubleNode.data == data){
        return true
      }
      currentDoubleNode = currentDoubleNode.next
    }
    return false
  }

  find(dataSubstr){
    if(!this.head){
      return '*list is empty*'
    }

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

  clear() {
    this.head = null
    this.size = 0
    return 'list cleared'
  }

  isEmpty() {
    return this.size > 0 ? false : true
  }

  remove(data) {

    if(!this.head){
      return '*list is empty*'
    }

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

  insertFirst(data) {
    let doubleNode = new DoubleNode(data)
    doubleNode.next = this.head
    this.size++
    return this.head = doubleNode
  }

  insertAfter(data) {
    let doubleNode = new DoubleNode(data)
    this.tail.next = doubleNode
    this.tail = doubleNode
    this.size++

    if(!doubleNode.head){
      return 'inserted at head'
    }
  }

  removesFirst() {
    let doubleNode = this.head.next
    this.head = doubleNode
    this.size--
    return 'removed first doubleNode'
  }

  insertBefore(zero_based_position, data) {
    if(!this.head){
      return '*list is empty*'
    }

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


  getPrevious(zero_based_position) {
    // return previous num node from last

    if(!this.head){
      return '*list is empty*'
    }

    if(isNaN(zero_based_position)){
      return 'enter an integer value for the zero-based index zero_based_position'
    }

    if(zero_based_position == 0){
      return null
    }


    let currentNode = this.head
    let i = 0

    while(currentNode && i < zero_based_position-1){
      currentNode = currentNode.next
      i++
    }

    if(zero_based_position > this.size){
      const lastIndex = i - 1
      return "null *last zero based indexed position is "+lastIndex+"*"
    } else if (zero_based_position === this.size){
      return "null *last zero based indexed position is "+i+"*"
    }

    return currentNode.data

  }

  setPrevious(zero_based_position, data) {
    // return previous num node from last
    if(!this.head){
      return '*list is empty*'
    }

    if(isNaN(zero_based_position)){
      return 'enter an integer value for the zero-based index zero_based_position'
    }

    if(zero_based_position == 0){
      return null
    }


    let currentNode = this.head
    let i = 0

    while(currentNode && i < zero_based_position){
      currentNode = currentNode.next
      i++
    }

    if(zero_based_position > this.size){
      const lastIndex = i - 1
      return "null *last zero based indexed position is "+lastIndex+"*"
    } else if (zero_based_position === this.size){
      return "null *last zero based indexed position is "+i+"*"
    }

    currentNode.prev.data = data
    return 'data has been set'
  }

  showProps(zero_based_position){

    if(isNaN(zero_based_position) || !zero_based_position){
      return 'please enter a valid integer'
    }

    let currentNode = this.head
    let i = 0

    while(currentNode && i < zero_based_position){
      currentNode = currentNode.next
      i++
    }
    console.log("{")
    console.log(" position: "+i)
    console.log(" data: "+currentNode.data)
    console.log(" prev: "+currentNode.prev.data)
    console.log(" next: "+currentNode.next.data)
    console.log("}")

    return 'returned'
  }

}
