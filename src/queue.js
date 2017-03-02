/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
export default class Queue {

  constructor() {
    this.dataStore = []
    this.size = null
  }

  enqueue(element){
    this.dataStore[this.size++] = element
  }

  clear(){
    this.dataStore.splice(0,1)
    this.size--
  }

  dequeue(element){
    if(this.size != null){
      return this.dataStore[0]
      this.dataStore.clear()
    }
  }

  clearTill(number){
    this.dataStore.splice(0,number)
    for(let i=null; i<number; i++){
      this.size--
    }
  }

  clearAll(){
    this.dataStore.splice(0, 2)
    this.size = null
  }

  length(element){
    return this.size
  }

  front(){
    return this.dataStore[0]
  }

  back(){
    return this.dataStore[this.size-1]
  }

  isEmpty(){
    return this.size >= 0 ? false : true
  }

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* UNCOMMENT CODE BELOW TO RUN CODE IN TERMINAL (node queue inside src directory) */

// 'use strict'
//
// function Queue() {
//   this.dataStore = []
//   this.size = null
// }
//
// Queue.prototype.enqueue = function(element){
//   this.dataStore[this.size++] = element
// }
//
// Queue.prototype.clear = function(){
//   this.dataStore.splice(0,1)
//   this.size--
// }
//
// Queue.prototype.dequeue = function(element){
//   if(this.size != null){
//     return this.dataStore[0]
//     this.dataStore.clear()
//   }
// }
//
// Queue.prototype.clearTill = function(number){
//   this.dataStore.splice(0,number)
//   for(let i=null; i<number; i++){
//     this.size--
//   }
// }
//
// Queue.prototype.clearAll = function(){
//   this.dataStore.splice(0, 2)
//   this.size = null
// }
//
// Queue.prototype.length = function(element){
//   return this.size
// }
//
// Queue.prototype.front = function(){
//   return this.dataStore[0]
// }
//
// Queue.prototype.back = function(){
//   return this.dataStore[this.size-1]
// }
//
// Queue.prototype.isEmpty = function(){
//   return this.size >= 0 ? false : true
// }
//
// const myQ = new Queue()
// console.log('myQ.enqueue("tom") => '+myQ.enqueue("tom"))
// console.log('myQ.enqueue("sam") => '+myQ.enqueue("sam"))
// console.log('myQ.dataStore => '+myQ.dataStore)
// console.log('myQ.front => '+myQ.front())
// console.log('myQ.isEmpty() '+myQ.isEmpty())
// console.log('myQ.front() => '+myQ.front())
// console.log('myQ.back() => '+myQ.back())
// console.log('myQ.length() => '+myQ.length())
// console.log('myQ.clearTill(1) => '+myQ.clearTill(1))
// console.log('myQ.isEmpty() => '+myQ.isEmpty())
// console.log('myQ.size => '+myQ.size)
// console.log('myQ.length() => '+myQ.length())
// console.log('myQ.dataStore => '+myQ.dataStore)
// console.log('myQ.clearAll() => '+myQ.clearAll())
// console.log('myQ.dataStore => '+myQ.dataStore)
