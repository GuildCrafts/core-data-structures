/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
// export default class Set {
//
//   constructor() {
//     this.dataStore = []
//   }
//   add(element) {
//     this.dataStore[this.dataStore.length] = element
//     return [this.dataStore]
//   }
//   isEmpty() {
//     return this.dataStore.length <= 0
//   }
//   contains(element) {
//     return this.dataStore.indexOf(element) !== -1 ? true : false
//   }
//   remove(element) {
//     for()
//   }
//   forEach() {
//   }
//   size() {
//     //
//   }
//   union() {
//     //
//   }
//   intersect() {
//     //
//   }
//   difference() {
//     //
//   }
//   isSubset() {
//     //
//   }
//   clone() {
//     //
//   }
//
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* ^^^ ALTERNATE WAY TO WRITE CODE ABOVE ^^^ */
// export default function Set() {
//   this.dataStore = []
// }
//
// Set.prototype.add = (element) => {
//   this.dataStore[this.dataStore.length] = element
//   return this.dataStore
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* UNCOMMENT CODE BELOW TO RUN CODE IN TERMINAL (node set inside src directory) */

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
  console.log('*** start of frequency **************************************')
  const setArr = this.dataStore
  const solution = []
  let freqOfAppearance = 0

  for(i=0; i<=setArr.length; i++){
    console.log(setArr.length+'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  >> >> >> ')
    freqOfAppearance = 0
    console.log('i ~~~~~~~ : '+i) ////////////////////
    for(x=i; x < setArr.length; x++){
      console.log('Start i: '+i+'   '+setArr[i])
      console.log('x: '+x+'   '+setArr[x])
      console.log('freqOfAppearance: '+freqOfAppearance) ////////////////////
      if(setArr[i] == setArr[x]){
        freqOfAppearance++
        console.log('2nd freqOfAppearance: '+freqOfAppearance) ////////////////////
      } else {
        //i = i+1
        i = x
        x = i-1
        freqOfAppearance = 0
        console.log('way back @@@@@') ////////////////////
      }
      if(freqOfAppearance > frequency-1){
        if(setArr[i] == solution[solution.length-1]){
          console.log('the number '+setArr[i]+' exceeds the count of '+frequency)
        } else {
          solution.push(setArr[i])
        }
        console.log('S  O   L   U   T  I  O  N     A D D E D ! => '+setArr[i])
        console.log('x: '+x)
        console.log('setArr.length: '+setArr.length)
        if(x == setArr.length){
          console.log('x = setArr.length ###### ###### ######### ######### ########')
          i = setArr.length+1
        }

        console.log('freqOfAppearance = frequency!!!!!!!!!!!!!!!!!!!!!!!!!!!!!??????')
      }
    }
  }

    console.log(solution)
    console.log('*** end of frequency ****')
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var checkFrequencyy = function(dataStore, frequency){
  console.log('*** start of frequency **************************************')
  const setArr = dataStore
  const solution = []
  let freqOfAppearance = 0

  for(i=0; i<=setArr.length; i++){
    console.log(setArr.length+'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  >> >> >> ')
    freqOfAppearance = 0
    console.log('i ~~~~~~~ : '+i) ////////////////////
    for(x=i; x < setArr.length; x++){
      console.log('Start i: '+i+'   '+setArr[i])
      console.log('x: '+x+'   '+setArr[x])
      console.log('freqOfAppearance: '+freqOfAppearance) ////////////////////
      if(setArr[i] == setArr[x]){
        freqOfAppearance++
        console.log('2nd freqOfAppearance: '+freqOfAppearance) ////////////////////
      } else {
        //i = i+1
        i = x
        x = i-1
        freqOfAppearance = 0
        console.log('way back @@@@@') ////////////////////
      }
      if(freqOfAppearance > frequency-1){
        if(setArr[i] == solution[solution.length-1]){
          console.log('the number '+setArr[i]+' exceeds the count of '+frequency)
        } else {
          solution.push(setArr[i])
        }
        console.log('S  O   L   U   T  I  O  N     A D D E D ! => '+setArr[i])
        console.log('x: '+x)
        console.log('setArr.length: '+setArr.length)
        if(x == setArr.length){
          console.log('x = setArr.length ###### ###### ######### ######### ########')
          i = setArr.length+1
        }

        console.log('freqOfAppearance = frequency!!!!!!!!!!!!!!!!!!!!!!!!!!!!!??????')
      }
    }
  }

    console.log(solution)
    console.log('*** end of frequency ****')
}

/* ------------------------------------------------------- */


//
// Set.prototype.difference = function(secondSet){
//   let matches = 0;
//   let solution = [];
//   let frequencyArray = [];
//
//   if(this.dataStore.length > secondSet.dataStore.length){
//     // console.log('this.dataStore: '+this.dataStore) // [4,2,2,2,2,8,8,8,8,8]
//     // console.log('secondSet.dataStore: '+secondSet.dataStore) // [3,2,7,2]
//     // console.log('this.dataStore.length: '+this.dataStore.length)
//     // console.log('secondSet.dataStore.length: '+secondSet.dataStore.length)
//     // console.log('THIS')
//     for(var i=0; i<this.dataStore.length; i++){
//       // matches = 0
//       for(var x=0; x<secondSet.dataStore.length; x++){
//         console.log('this.dataStore[i]: '+this.dataStore[i])
//         console.log('secondSet.dataStore[x]: '+secondSet.dataStore[x])
//         console.log(this.dataStore[i] === secondSet.dataStore[x])
//         if(this.dataStore[i] == secondSet.dataStore[x]){
//           matches++
//           console.log('~')
//           console.log('matches: '+matches)
//         } else {
//           // console.log('HOLA ~~~~~~~~~~ ')
//           frequencyArray.push(secondSet.dataStore[x])
//           // console.log('frequencyArray: '+frequencyArray)
//         }
//       }
//       if(matches = 0){
//         solution.push(this.dataStore[i])
//         console.log('P   U   S   H      T  O     DATASTORE')
//       }
//     }
//
//     console.log('frequencyArray: '+frequencyArray)
//     //solution.push(checkFrequencyy(frequencyArray, secondSet.length))
//     //return solution
//
//   } else {
//     console.log('reverse order of sets')
//   }
//
// }





// Set.prototype.difference = function(secondSet){
//
//   const differenceStore = []
//   console.log('this.dataStore => ',this.dataStore)
//   console.log('secondSet.dataStore => ',secondSet.dataStore)
//   console.log('@@@@@@@@@@@@')
//   console.log(this.size >= secondSet.size)
//   console.log('@@@@@@@@@@@@')
//
//
//   if(this.size >= secondSet.size){
//
//     for(var i=0; i < this.size; i++){
//       for(var x=0; x <= this.size; x++){
//         if(secondSet.dataStore[x] !== this.dataStore[i]){
//           differenceStore.push(this.dataStore[i])
//           x = this.size + 1
//         } else {
//           console.log(secondSet.dataStore[x]+' == '+this.dataStore[i])
//           x = this.size + 1
//         }
//       }
//     }
//
//     for(var i=0; i < this.size; i++){
//       for(var x=0; x <= secondSet.size; x++){
//         if(secondSet.dataStore[i] !== this.dataStore[x]){
//           differenceStore.push(secondSet.dataStore[i])
//           x = secondSet.size + 1
//         } else {
//           console.log(secondSet.dataStore[x]+' == '+this.dataStore[i])
//           x = secondSet.size + 1
//         }
//       }
//     }
//
//     return differenceStore
//
//   } else {
//
//     for(var i=0; i < this.size; i++){
//       for(var x=0; x <= secondSet.size; x++){
//         if(secondSet.dataStore[x] !== this.dataStore[i]){
//           differenceStore.push(secondSet.dataStore[i])
//           //x = secondSet.size + 1
//         } else {
//           console.log(secondSet.dataStore[i]+' !== '+this.dataStore[x])
//         }
//       }
//     }
//     return differenceStore
//   }
//
// }


Set.prototype.difference = function(secondSet){

  // [ 2, 2, 3, 7 ]
  // [ 4, 2, 2, 2, 2, 8, 8, 8, 8, 8 ]

  var count = 0;
  var thisSetDiff = [];
  var secondSetDiff = [];
  var solution;
  var secondSetDataStore = secondSet.dataStore.sort(function(a,b){return a-b})


  console.log(secondSetDataStore)
  console.log(this.dataStore)

  for(i=0; i<this.size; i++){
    console.log('HAIL')
    for(x=0; x<secondSetDataStore.length; x++){
      console.log('i: '+i)
      console.log('x: '+x)
      console.log('this.dataStore[i]: '+this.dataStore[i])
      console.log('secondSetDataStore[x]: '+secondSetDataStore[x])
      if(this.dataStore[i] != secondSetDataStore[x]){
        console.log(' DIFFERENT! :)')
        count++
        console.log('////////////////////////////////////////////')
        console.log('count: '+count)
        console.log('secondSetDataStore.length: '+secondSetDataStore.length)
        console.log('this.dataStore[this.size-1]: '+thisSetDiff[this.size-1])
        console.log('thisSet[i]: '+this.dataStore[i])
        console.log('////////////////////////////////////////////')
        if(count >= secondSetDataStore.length && thisSetDiff[thisSetDiff.length-1] != this.dataStore[i]){
          thisSetDiff.push(this.dataStore[i])
          console.log('thisSetDiff: '+thisSetDiff)
          console.log('N   E   W      T H I S   E  L  E  M  E  N  T')
        }
        console.log('secondSetDataStore[x]: '+secondSetDataStore[x])
        console.log('secondSetDataStore[secondSetDataStore.length-1]: '+secondSetDataStore[secondSetDataStore.length-1])
        if(secondSetDataStore[x] != secondSetDataStore[secondSetDataStore.length-1]){
          console.log('    - - - ->        NO match. :)')
          secondSetDiff.push(secondSetDataStore[x])
          console.log('N   E   W      SS   E  L  E  M  E  N  T')
          console.log('secondSetDiff => '+secondSetDiff)
        }
      }
    } count = 0
  }

  console.log('thisSetDiff: '+thisSetDiff)
  console.log('secondSetDiff: '+secondSetDiff)

  //
  // secondSet.dataStore = secondSetDataStore
  // secondSetDiff = secondSetDiff.sort(function(a,b){return a-b})
  // solution = checkFrequencyy(secondSetDataStore, this.size)
  //
  // solution = thisSetDiff.concat(secondSetDiff)
  // console.log('difference solution => '+solution)
  // return solution

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
//console.log('After removing 1 element mySet.contains() =>', mySet.contains())
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
//console.log(mySuperSet.checkFrequency(4))
console.log('###############################################')
console.log(mySuperSet.difference(mySet))


// Set.prototype.difference =
// Set.prototype.isSubset =
// Set.prototype.clone =
