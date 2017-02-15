/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
export default class Set {

  constructor() {
    this.dataStore = []
    this.top = 0
  }
  add() {
    //
  }
  isEmpty() {
    //
  }
  contains() {
    //
  }
  remove() {
    //
  }
  forEach() {
    //
  }
  size() {
    //
  }
  union() {
    //
  }
  intersect() {
    //
  }
  difference() {
    //
  }
  isSubset() {
    //
  }
  clone() {
    //
  }

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* ^^^ ALTERNATE WAY TO WRITE CODE ABOVE ^^^ */
// export default function Set() {
//   this.dataStore = []
//   this.top = 0
// }
//
// Set.prototype.push = function(element){
//   this.dataStore[this.top++] = element
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* UNCOMMENT CODE BELOW TO RUN CODE IN TERMINAL (node set inside src directory) */
// function Set() {
//   this.dataStore = []
//   this.top = 0
// }
//
// Stack.prototype.push = function(element){
//   this.dataStore[this.top++] = element
// }
//
// Stack.prototype.pop = function(){
//   return this.dataStore[--this.top]
// }
//
// Stack.prototype.peek = function(){
//   return this.dataStore[this.top-1]
// }
//
// const myStack = new Stack()
// myStack.push('yolo');
// myStack.push('foo');
// myStack.pop();
// console.log('myStack.peek(): ', myStack.peek());
