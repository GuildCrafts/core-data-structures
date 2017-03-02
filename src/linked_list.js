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

    while(currentNode.next != null){ // while current head.data doesn't equal data run following command.
      displayArray.push(currentNode.data) // or for brevity: displayArray.push(currentNode)
      currentNode = currentNode.next // think of this as saying currentNode.next : currentNode : <actual next node>
    }

    displayArray.push(currentNode.data) // we store the final node // displayArray.push(currentNode)
    return displayArray
  }


  insert(data){
    let thisNode = new Node(data)

    if(!this.head){ // if this.head = null
      this.size++
      return this.head = this.tail = thisNode
    }

    this.tail.next = thisNode // if this.head returns boolean true we set the tail.next to our node.
    this.tail = thisNode // we then set
    this.size++

    return this.tail
  }


  getTailNode(){
    if(!this.tail){
      console.log('no tail present')
    } else {
      return this.tail // how to return an object with its tail = true?
    }
  }


  getHeadNode(){
    if(!this.tail){
      console.log('no head present')
    } else {
      return this.head
    }
  }


  contains(data){
    let currentNode = this.head // here I'm trying to check every node for which one matches data. I start at the head.

    while(currentNode.next != null){ // while current head.data doesn't equal data run following command.
      if(currentNode.data == data){ // check if the data in our currentNode matches 'data' for each iteration through.
        return 'true'
      }
      currentNode = currentNode.next // think of this as saying currentNode.next : currentNode : <actual next node>
    }
    return 'false'
  }


  find(dataSubstr){
    let currentNode = this.head

    while(currentNode.next){
      if(currentNode.data.includes(dataSubstr)){
        console.log(dataSubstr+' found')
        return currentNode
      }
      currentNode = currentNode.next // OR currentNode = currentNode
    }
    console.log(dataSubstr+' not found')
    return '-1'
  }


  isEmpty(){
    return this.size > 0 ? 'false' : 'true'
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
    // trickier to write than I thought
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

// 'use strict'
//
// function linkedList() {
//   this.size = 0
//   this.head = null
//   this.tail = null
// }
//
// function Node(data) {
//   this.data = data
//   this.next = null
// }
//
// linkedList.prototype.showAll = function(){
//   let displayArray = []
//   let currentNode = this.head
//
//   if(!this.head){
//     return '*list is empty*'
//   }
//
//   while(currentNode.next != null){ // while current head.data doesn't equal data run following command.
//     displayArray.push(currentNode.data) // or for brevity: displayArray.push(currentNode)
//     currentNode = currentNode.next // think of this as saying currentNode.next : currentNode : <actual next node>
//   }
//
//   displayArray.push(currentNode.data) // we store the final node // displayArray.push(currentNode)
//   return displayArray
// }
//
//
// linkedList.prototype.insert = function(data){
//   let thisNode = new Node(data)
//
//   if(!this.head){ // if this.head = null
//     this.size++
//     return this.head = this.tail = thisNode
//   }
//
//   this.tail.next = thisNode // if this.head returns boolean true we set the tail.next to our node.
//   this.tail = thisNode // we then set
//   this.size++
//
//   return this.tail
// }
//
//
// linkedList.prototype.getTailNode = function(){
//   if(!this.tail){
//     console.log('no tail present')
//   } else {
//     return this.tail // how to return an object with its tail = true?
//   }
// }
//
//
// linkedList.prototype.getHeadNode = function(){
//   if(!this.tail){
//     console.log('no head present')
//   } else {
//     return this.head
//   }
// }
//
//
// linkedList.prototype.contains = function(data){
//   let currentNode = this.head // here I'm trying to check every node for which one matches data. I start at the head.
//
//   while(currentNode.next != null){ // while current head.data doesn't equal data run following command.
//     if(currentNode.data == data){ // check if the data in our currentNode matches 'data' for each iteration through.
//       return 'true'
//     }
//     currentNode = currentNode.next // think of this as saying currentNode.next : currentNode : <actual next node>
//   }
//   return 'false'
// }
//
//
// linkedList.prototype.find = function(dataSubstr){
//   let currentNode = this.head
//
//   while(currentNode.next){
//     if(currentNode.data.includes(dataSubstr)){
//       console.log(dataSubstr+' found')
//       return currentNode
//     }
//     currentNode = currentNode.next // OR currentNode = currentNode
//   }
//   console.log(dataSubstr+' not found')
//   return '-1'
// }
//
//
// linkedList.prototype.isEmpty = function(){
//   return this.size > 0 ? 'false' : 'true'
// }
//
//
// linkedList.prototype.clear = function(){
//   this.head = null
//   this.size = 0
//   return 'list cleared'
// }
//
//
// linkedList.prototype.insertFirst = function(data){
//   let node = new Node(data)
//   node.next = this.head
//   this.size++
//   return this.head = node
// }
//
// linkedList.prototype.insertAfter = function(data){
//   let node = new Node(data)
//   this.tail.next = node
//   this.tail = node
//   this.size++
// }
//
// linkedList.prototype.removeFirst = function(){
//   let node = this.head.next
//   this.head = node
//   this.size--
//   return 'removed first node'
// }
//
//
// linkedList.prototype.remove = function(){
//   // trickier to write than I thought
//   let checkSize = 0
//   let currentNode = this.head
//   let sizeMinus2 = this.size - 2
//   while(currentNode && checkSize < sizeMinus2){
//     currentNode = currentNode.next
//     checkSize++
//   }
//   currentNode.next = null
//   this.tail = currentNode
//   this.size--
//   return 'removed tail node'
// }
//
//
// let myLL = new linkedList
// console.log('myLL.insert{"rolo"} => '+myLL.insert("rolo"))
// console.log('myLL.insert{"robocop"} => '+myLL.insert("robocop"))
// console.log('myLL.size => '+myLL.size)
// console.log('myLL.isEmpty() => '+myLL.isEmpty())
// console.log('myLL.insert{"bartman"} => '+myLL.insert("bartman"))
// console.log('myLL.size => '+myLL.size)
// console.log('myLL.tail => '+myLL.tail)
// console.log('myLL.tail.data => '+myLL.tail.data)
// console.log('myLL.contains("robocop") => '+myLL.contains("robocop"))
// console.log('myLL.contains("robocopz") => '+myLL.contains("robocopz"))
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.find("rol") => '+myLL.find("rol"))
// console.log('myLL.find("rolz") => '+myLL.find("rolz"))
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.insertFirst("I AM FIRST!") => '+myLL.insertFirst('I AM FIRST!'))
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.insertAfter("I AM LAST!") => '+myLL.insertAfter('I AM LAST!'))
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.removeFirst() => '+myLL.removeFirst())
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.remove() => '+myLL.remove())
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.tail.data => '+myLL.tail.data)
// console.log('myLL.remove() => '+myLL.remove())
// console.log('myLL.showAll() => '+myLL.showAll())
// console.log('myLL.tail.data => '+myLL.tail.data)
// console.log('myLL.clear() => '+myLL.clear())
// console.log('myLL.showAll() => '+myLL.showAll())
