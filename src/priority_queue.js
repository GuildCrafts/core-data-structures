'use strict'

function pQueue() {
  this.dataStore = {
    0: {'ds':[]}
  }
  this.size = null
}

pQueue.prototype.enqueue = function(element,priority){

  if(!this.dataStore[priority]){
    this.dataStore[priority] = {'ds':[]}
    this.dataStore[priority]['ds'].push(element)
  } else {
    this.dataStore[priority]['ds'].push(element)
  }
  console.log('this.size => '+this.size)
  this.size++
  return this.showAll()
}

pQueue.prototype.front = function(){
  let priorityNumbers = []
  for(let i=0; i < Object.keys(this.dataStore).length; i++){
    priorityNumbers.push(this.dataStore[i])
  }
  let priorityNumbersSorted = priorityNumbers.sort(function(a,b){return a-b})

  return priorityNumbersSorted[Object.keys(this.dataStore).length-1]['ds']['size']
}

pQueue.prototype.dequeue = function(){
  if(this.size != null){
    if(this.dataStore[Object.keys(this.dataStore).length-1]['ds'] != null){
      if(this.dataStore[Object.keys(this.dataStore).length-1]['ds'].length === 1){
        console.log(this.dataStore[Object.keys(this.dataStore).length-1]['ds'][0])
        console.log('~')
        delete this.dataStore[Object.keys(this.dataStore).length-1];
      } else if(this.dataStore[Object.keys(this.dataStore).length-1]['ds'].length > 1){
        this.dataStore[Object.keys(this.dataStore).length-1]['ds'].splice(0,1);
      }
    } else {
      delete this.dataStore[Object.keys(this.dataStore).length-1]
    }
  }
  return this.showAll()
}

pQueue.prototype.back = function(){
  let priorityNumbers = []
  for(let i=0; i < Object.keys(this.dataStore).length; i++){
    priorityNumbers.push(this.dataStore[i])
  }
  let priorityNumbersSorted = priorityNumbers.sort(function(a,b){return b-a})
  return priorityNumbersSorted[0]['ds'][0]
}

pQueue.prototype.isEmpty = function(){
  return this.size ? false : true
}

pQueue.prototype.length = function(){
  return this.size
}

pQueue.prototype.showAll = function(){

    let allItems = []; for(let i=Object.keys(this.dataStore).length-1; i>-1; i--){ allItems.push(this.dataStore[i]['ds']) }

    return allItems
}


let myPQ = new pQueue
console.log('myPQ.showAll() => '+myPQ.showAll())
console.log('myPQ.enqueue("uno",0) => '+myPQ.enqueue("uno",0))
console.log('myPQ.enqueue("deux",0) => '+myPQ.enqueue("deux",0))
console.log('myPQ.enqueue("tres",0) => '+myPQ.enqueue("tres",0))
console.log('myPQ.enqueue("yolo",1) => '+myPQ.enqueue("yolo",1))
console.log('myPQ.enqueue("polo",2) => '+myPQ.enqueue("polo",2))
console.log('myPQ.front() => '+myPQ.front())
console.log('myPQ.back() => '+myPQ.back())
console.log('myPQ.isEmpty() => '+myPQ.isEmpty())
console.log('myPQ.length() => '+myPQ.length())
console.log(myPQ.dataStore[1]["ds"])
console.log(myPQ.dataStore)
console.log('myPQ.dequeue() => '+myPQ.dequeue())
console.log('myPQ.dequeue() => '+myPQ.dequeue())
console.log('myPQ.dequeue() => '+myPQ.dequeue())
console.log('myPQ.dequeue() => '+myPQ.dequeue())
console.log('#####################')
console.log(myPQ.dataStore)
