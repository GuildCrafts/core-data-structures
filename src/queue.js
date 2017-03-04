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
      this.clear()
      return this.dataStore[0]
    }
  }

  clearTill(number){
    this.dataStore.splice(0,number)
    for(let i=null; i<number; i++){
      this.size--
    }
  }

  clearAll(){
    const size = this.size
    this.dataStore.splice(0, size+1)
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
    return this.size == null ? true : false
  }

}
