export default class Stack {

  constructor() {
    this.dataStore = []
    this.top = 0
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }

}

// ^^^ ALTERNATE WAY TO WRITE CODE ^^^
//
// export default function Stack() {
//   this.dataStore = []
//   this.top = 0
// }
//
// Stack.prototype.push = function(element){
//   this.dataStore[this.top++] = element
// }
