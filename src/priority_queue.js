'use strict'

function pQueue() {
  this.dataStore = { // making this an array is the most efficient way to handle this ds
    0: {'ds':[] /*, 'size': 0*/}
  }
  this.size = null
}

pQueue.prototype.enqueue = function(element,priority){ // if the priority is 0 users can omit giving the second priority here because it is assumed
  // if priority key doesn't exist create a new Queue, add element into it using the queue commands
  if(!this.dataStore[priority]){
    // create a key and value named <priority> and <element> respectively
    this.dataStore[priority] = {'ds':[]}
    this.dataStore[priority]['ds'].push(element)
  } else { // if priority key exists add new element to the queue
    this.dataStore[priority]['ds'].push(element)
  }
  console.log('this.size => '+this.size)
  this.size++
  return this.showAll()
}

pQueue.prototype.front = function(){
  // return the highest priority 1st item
  // findHighestPriority
  let priorityNumbers = []
  for(let i=0; i < Object.keys(this.dataStore).length; i++){
    priorityNumbers.push(this.dataStore[i])
  }
  let priorityNumbersSorted = priorityNumbers.sort(function(a,b){return a-b})

  // console.log('priorityNumbers => '+priorityNumbers)
  // console.log('priorityNumbersSorted => '+priorityNumbersSorted)
  // console.log('priorityNumbersSorted[0]["ds"] => '+priorityNumbersSorted[0]["ds"])
  // console.log('priorityNumbersSorted[1]["ds"] => '+priorityNumbersSorted[1]["ds"])
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
        // delete this.dataStore[Object.keys(this.dataStore).length-1];
      }
    } else {
      delete this.dataStore[Object.keys(this.dataStore).length-1]
      // delete this.dataStore[Object.keys(this.dataStore).length-1]['ds'];
    }
    // delete this.dataStore[ this.dataStore[this.back()] ]
    // console.log('>> >> >> >>>>'+this.dataStore[this.back()])
    // this.size--
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
  //let allItems = []
  //
  //if(Object.keys(this.dataStore).length < 1 /*&& this.dataStore[0]['size'] != null*/){
    // for(let i=0; i<Object.keys(this.dataStore).length; i++){
    //   console.log('Object.keys(this.dataStore).length ===> '+Object.keys(this.dataStore).length)
    //   console.log('>   >   >   >   >   >> '+Object.keys(this.dataStore).length )
    //   // console.log('this.dataStore[i]["ds"].length => ' + this.dataStore[i]['ds'].length)
    //   // console.log(this.dataStore[1]['ds'])
    //   console.log('this.size = '+this.size)
    //   for(let x=0; x<this.dataStore[i]["ds"].length; x++){ // get size of each item
    //
    //       allItems.push(this.dataStore[i]['ds'][x])
    //   }
    //   // console.log('@@@@ this.dataStore[i]["ds"].length => ' + this.dataStore[i]['ds'].length)
    // }

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
