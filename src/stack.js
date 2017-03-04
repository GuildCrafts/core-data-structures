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
      this.top = i
    }
    return this.dataStore[this.top]
  }
  
}
