export default class Set {

  constructor(){
    this.dataStore = []
    this.size = 0
  }

  add(element){
    this.dataStore[this.size++] = element
    return '+1'
  }

  contains(){
    return this.size > 0 ? 'true' : 'false'
  }

  isEmpty(){
    return this.size = 0 ? false : true
  }

  remove(indexNum){
    console.log(this.dataStore[indexNum]+' is removed.')
    this.dataStore.splice(indexNum,1)
    this.size--
  }

  show(indexNum){
    return this.dataStore[indexNum]
  }

  length(){
    return this.size
  }

  showAll(){
    const elementsInStore = []
    for(let i=0; i < this.size; i++){
      elementsInStore.push(this.dataStore[i])
    }
    return elementsInStore
  }

  forEach(func){
    const elementsInStore = []
    for(let i=0; i < this.size; i++){
      elementsInStore.push(func(this.dataStore[i]))
    }
    return elementsInStore
  }

  union(secondSet){
    const union = []
     union.push(this.dataStore)
     union.push(secondSet.dataStore)
    return union
  }

  intersect(secondSet){

    const intersectorsStore = []
    if(secondSet.dataStore > this.dataStore){
      for(let i=0; i <= secondSet.size; i++){
        for(let x=0; x < this.size; x++){
          if(this.dataStore[i] == secondSet.dataStore[x]){
            intersectorsStore.push(this.dataStore[i])
          }
        }
      }
      return intersectorsStore

    } else {

      for(let i=0; i <= this.size; i++){
        for(let x=0; x < secondSet.size; x++){
          if(secondSet.dataStore[i] == this.dataStore[x]){
            intersectorsStore.push(secondSet.dataStore[i])
          }
        }
      }
      return intersectorsStore
    }

  }

  /* ~~~~~~~~~~~~~~~~~ THE holy shrine of checkFrequency ~~~~~~~~~~~~~~~~~~~~~~~~ */

  checkFrequency(frequency){
    const setArr = this.dataStore
    const solution = []
    let freqOfAppearance = 0

    for(let i=0; i<=setArr.length; i++){
      freqOfAppearance = 0
      for(x=i; x < setArr.length; x++){
        if(setArr[i] == setArr[x]){
          freqOfAppearance++
        } else {
          //i = i+1
          i = x
          x = i-1
          freqOfAppearance = 0
        }
        if(freqOfAppearance > frequency-1){
          if(setArr[i] == solution[solution.length-1]){
          } else {
            solution.push(setArr[i])
          }
          if(x == setArr.length){
            i = setArr.length+1
          }

        }
      }
    }
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  checkFrequencyy(dataStore, frequency){
    const setArr = dataStore
    const solution = []
    let freqOfAppearance = 0

    for(let i=0; i<=setArr.length; i++){
      freqOfAppearance = 0
      for(let x=i; x < setArr.length; x++){
        if(setArr[i] == setArr[x]){
          freqOfAppearance++
        } else {
          //i = i+1
          i = x
          x = i-1
          freqOfAppearance = 0
        }
        if(freqOfAppearance > frequency-1){
          if(setArr[i] == solution[solution.length-1]){
          } else {
            solution.push(setArr[i])
          }
          if(x == setArr.length){
            i = setArr.length+1
          }
        }
      }
    }

  }


  difference(secondSet){

    var count = 0;
    var thisSetDiff = [];
    var secondSetDiff = [];
    var solution;
    var secondSetDataStore = secondSet.dataStore.sort(function(a,b){return a-b})

    for(let i=0; i<this.size; i++){
      for(let x=0; x<secondSetDataStore.length; x++){
        if(this.dataStore[i] != secondSetDataStore[x]){
          count++
          if(count >= secondSetDataStore.length && thisSetDiff[thisSetDiff.length-1] != this.dataStore[i]){
            thisSetDiff.push(this.dataStore[i])
          }
          if(secondSetDataStore[x] != secondSetDataStore[secondSetDataStore.length-1]){
            secondSetDiff.push(secondSetDataStore[x])
          }
        }
      } count = 0
    }

  }
}
