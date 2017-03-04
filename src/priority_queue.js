/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
export default class PQueue {

  constructor() {
    this.dataStore = {
      0: {'ds':[]}
    }
    this.size = null
  }

  enqueue(element,priority){

    if(!this.dataStore[priority]){
      this.dataStore[priority] = {'ds':[]}
      this.dataStore[priority]['ds'].push(element)
    } else {
      this.dataStore[priority]['ds'].push(element)
    }
    this.size++
    return this.showAll()
  }

  front(){
    let allElements = this.showAll()
    console.log(allElements)
    return allElements[0][0]
  }

  dequeue(){
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

  back(){
    const allElements = this.showAll()
    let bla = [ [4,5],[1,2],[2,3] ]

    const lastArray = allElements.length - 1
    const lastItem = allElements[lastArray]
    const solution = lastItem[lastItem.length - 1]

    return solution
  }

  isEmpty(){
    return this.size ? false : true
  }

  length(){
    return this.size
  }

  showAll(){

      let allItems = []; for(let i=Object.keys(this.dataStore).length-1; i>-1; i--){ allItems.push(this.dataStore[i]['ds']) }

      return allItems
  }

}
