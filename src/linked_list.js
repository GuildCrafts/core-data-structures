class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}


export default class LinkedList {

  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }


  showAll(){
    let displayArray = []
    let currentNode = this.head

    if(!this.head){
      return '*list is empty*'
    }

    while(currentNode.next != null){
      displayArray.push(currentNode.data)
      currentNode = currentNode.next
    }

    displayArray.push(currentNode.data)
    return displayArray
  }


  insert(data){
    let thisNode = new Node(data)

    if(!this.head){
      this.size++
      return this.head = this.tail = thisNode
    }

    this.tail.next = thisNode
    this.tail = thisNode
    this.size++

    return this.tail
  }


  getTailNode(){
    if(!this.tail){
      return 'no tail present'
    } else {
      return this.tail.data
    }
  }


  getHeadNode(){
    if(!this.tail){
      return 'no head present'
    } else {
      return this.head.data
    }
  }


  contains(data){
    if(this.tail.data == data){
      return true
    }

    let currentNode = this.head

    while(currentNode.next){
      if(currentNode.data == data){
        return 'true'
      }
      currentNode = currentNode.next
    }
    return false
  }


  find(dataSubstr){
    if(this.tail.data.includes(dataSubstr)){
      return this.tail.data
    }

    let currentNode = this.head

    while(currentNode.next){
      if(currentNode.data.includes(dataSubstr)){
        return currentNode.data
      }
      currentNode = currentNode.next
    }
    return '-1'
  }


  isEmpty(){
    return this.size > 0 ? false : true
  }


  clear(){
    this.head = null
    this.size = 0
    return 'list cleared'
  }


  insertFirst(data){
    let node = new Node(data)
    node.next = this.head
    this.size++
    return this.head = node
  }


  insertAfter(data){
    let node = new Node(data)
    this.tail.next = node
    this.tail = node
    this.size++
  }


  removeFirst(){
    let node = this.head.next
    this.head = node
    this.size--
    return 'removed first node'
  }


  remove(){
    let checkSize = 0
    let currentNode = this.head
    let sizeMinus2 = this.size - 2
    while(currentNode && checkSize < sizeMinus2){
      currentNode = currentNode.next
      checkSize++
    }
    currentNode.next = null
    this.tail = currentNode
    this.size--
    return 'removed tail node'
  }

}
