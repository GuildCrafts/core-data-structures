/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
export default class Stack {

  constructor() {
    this.dataStore = []
    this.top = 0
  }
  push(element) {
    this.dataStore[this.top++] = element;
  }
  pop() {
    return this.dataStore[--this.top];
  }
  peek() {
    return this.dataStore[this.top-1]
  }
  isEmpty() {
    return this.dataStore.length <= 0
  }
  length() {
    return this.top
  }
  returnStackedElement(indexPos){
    for(let i = this.top; i < indexPos ; --i){
      console.log('popped element on index '+this.top)
      let this.top = i
    }
    return this.dataStore[this.top]
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* ^^^ ALTERNATE WAY TO WRITE CODE ABOVE ^^^ */
// export default function Stack() {
//   this.dataStore = []
//   this.top = 0
// }
//
// Stack.prototype.push = function(element){
//   this.dataStore[this.top++] = element
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* UNCOMMENT CODE BELOW TO RUN CODE IN TERMINAL (node stack inside src directory) */
// function Stack() {
//   this.dataStore = []
//   this.top = 0
// }
//
// Stack.prototype.push = function(element){
//   this.dataStore[this.top++] = element
// }
//
// Stack.prototype.length = () => {
//  return this.dataStore.length
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
// console.log('myStack.length() => ',myStack.length())
// myStack.push('foo');
// myStack.pop();
// console.log('myStack.peek() => ', myStack.peek());
