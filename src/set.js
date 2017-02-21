/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
export default class Set {

  constructor() {
    this.dataStore = []
  }
  add(element) {
    this.dataStore[this.dataStore.length] = element
    return [this.dataStore]
    // here we are tasked to add an element into our set. Our set takes in information in an unordered way,so when adding we could choose simply to push the new element into the array data store, or we could ?
    // Use a simple trick that doesn't require the use of push! We could call the length of our array and point the myArray index to the value we want it to.
  }
  isEmpty() {
    return this.dataStore.length <= 0
    // here we are tasked to return a boolean value statign whether or not our ds is empty, the only real way to solve this is to check if the length is more than 0.
  }
  contains(element) {
    return this.dataStore.indexOf(element) !== -1 ? true : false
    // here we are tasked with checking if our ds contains a certain element. We can do this by iterating through the array and checking each index position to see if our element matches an item inside the array. Write a for loop. Make the initialization code i = 0, make the condition checking if the starting point matches the length, and the final-expression as an increment. Then inside the loop we have an if statement that sees if the particular indexed element matches our argument then return true if it doesn't return continue.
    // Get to know your indexOf() function! Also ternary!!!!!
  }
  remove(element) {
    for()
    // here we are tasked with removing an item we pass the name of to. Perhaps we look for the index of that item and then erase the number.
    // this.dataStore.splice(this.dataStore.indexOf(element))
  }
  forEach() {
    //here we want to run a function on every element in our set. We could write a for loop and inside it run the function we want on every element.
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
// }
//
// Set.prototype.add = function(element){
//   this.dataStore[this.dataStore.length] = element
//   return this.dataStore
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* UNCOMMENT CODE BELOW TO RUN CODE IN TERMINAL (node set inside src directory) */
// function Set() {
//   this.dataStore = []
// }
//
// Set.prototype.add = function(element){
//   this.dataStore[this.dataStore.length] = element
//   return this.dataStore
// }
//
// const mySet = new Set()
// mySet.add(1);
// mySet.add(2);
// console.log('mySet contents => ', mySet.add(7))
