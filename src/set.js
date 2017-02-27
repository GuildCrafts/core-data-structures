function Set() {
  this.dataStore = []
  this.size = 0
}
Set.prototype.add = function(element){
  this.dataStore[this.size++] = element
  console.log('+1')
}

Set.prototype.contains = function(){
  return this.size > 0 ? 'true' : 'false'
}

Set.prototype.isEmpty = function(){
  return this.size = 0 ? 'false' : 'true'
}

Set.prototype.remove = function(indexNum){
  console.log(this.dataStore[indexNum]+' is removed.')
  this.dataStore.splice(indexNum,1)
  this.size--
}

Set.prototype.show = function(indexNum){
  return this.dataStore[indexNum]
}

Set.prototype.length = function(){
  return this.size
}

Set.prototype.showAll = function(){
  const elementsInStore = []
  for(i=0; i < this.size; i++){
    elementsInStore.push(this.dataStore[i])
  }
  return elementsInStore
}

Set.prototype.forEach = function(func){
  const elementsInStore = []
  for(i=0; i < this.size; i++){
    elementsInStore.push(func(this.dataStore[i]))
  }
  return elementsInStore
}

Set.prototype.union = function(secondSet){
  const union = []
   union.push(this.dataStore)
   union.push(secondSet.dataStore)
  return union
}




Set.prototype.intersect = function(secondSet){

  const intersectorsStore = []
  if(secondSet.dataStore > this.dataStore){
    for(i=0; i <= secondSet.size; i++){
      for(x=0; x < this.size; x++){
        if(this.dataStore[i] == secondSet.dataStore[x]){
          intersectorsStore.push(this.dataStore[i])
        }
      }
    }
    return intersectorsStore

  } else {

    for(i=0; i <= this.size; i++){
      for(x=0; x < secondSet.size; x++){
        if(secondSet.dataStore[i] == this.dataStore[x]){
          intersectorsStore.push(secondSet.dataStore[i])
        }
      }
    }
    return intersectorsStore
  }

}

/* ~~~~~~~~~~~~~~~~~ THE holy shrine of checkFrequency ~~~~~~~~~~~~~~~~~~~~~~~~ */

Set.prototype.checkFrequency = function(frequency){
  const setArr = this.dataStore
  const solution = []
  let freqOfAppearance = 0

  for(i=0; i<=setArr.length; i++){
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

var checkFrequencyy = function(dataStore, frequency){
  const setArr = dataStore
  const solution = []
  let freqOfAppearance = 0

  for(i=0; i<=setArr.length; i++){
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


Set.prototype.difference = function(secondSet){

  var count = 0;
  var thisSetDiff = [];
  var secondSetDiff = [];
  var solution;
  var secondSetDataStore = secondSet.dataStore.sort(function(a,b){return a-b})

  for(i=0; i<this.size; i++){
    for(x=0; x<secondSetDataStore.length; x++){
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




const mySet = new Set()
console.log('mySet.contains() =>', mySet.contains())
console.log('mySet.dataStore => ', mySet.dataStore)
console.log('mySet.add(3)'); mySet.add(3);
console.log('mySet.add(2)'); mySet.add(2);
console.log('mySet.add(1)'); mySet.add(1);
console.log('mySet.show(0) => '+mySet.show(0))
console.log('mySet.dataStore =>', mySet.dataStore)
mySet.remove(1)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('mySet.dataStore =>', mySet.dataStore)
console.log('mySet.show(0) => ', mySet.show(0))
console.log('mySet.remove(1) => ')
mySet.remove(1)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('mySet.dataStore => ', mySet.dataStore)
console.log('mySet.size => ', mySet.size)
console.log('mySet.showAll() => ', mySet.showAll())
console.log('mySet.length() => ', mySet.length())
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('mySet.forEach(function(a){return a+99}) => ',mySet.forEach(function(a){return a+99}))

const mySecondSet = new Set()
mySet.add(2)
mySet.add(7)
mySet.add(2)
mySecondSet.add(7)
mySecondSet.add(10)
console.log('mySet.union(mySecondSet) => ',mySet.union(mySecondSet))
console.log('return union of two sets => ',mySet.intersect(mySecondSet))
console.log('return difference between two sets =>',mySet.difference(mySecondSet))
const mySuperSet = new Set()
mySuperSet.add(4) //0
mySuperSet.add(2) //1
mySuperSet.add(2) //2
mySuperSet.add(2) //3
mySuperSet.add(2) //4
mySuperSet.add(8) //5
mySuperSet.add(8) //6
mySuperSet.add(8) //7
mySuperSet.add(8) //8
mySuperSet.add(8) //9
console.log(mySuperSet.dataStore)
console.log(mySuperSet.difference(mySet))
