const set = new Set(['A', 'B', 'C'])
const otherSet = new Set(['B', 'C', 'E'])

// export class Node {
//   constructor(value) {
//     this.data = value
//     this.next = null
//   }
// }
//
// export default class set {
//   constructor() {
//     this.size = 0
//   }

//set.add('D')             // adds an element to the set.
let value = 0
let set = [value]
let set = new Set([value])

add(value) {
  let set = [value]
  for (i = 0; i < value.size; i++) {
    value[i++]
    return set
  }

    const set = new Set
    this.size += 1
}
set.isEmpty()            // returns true if the set is empty or false if not.
set.contains('B')        // returns true the set contains the element or false if not.
set.remove('C')          // removes an element (if it exists) from the set.
set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
set.size()               // returns the number of elements in the set.
set.union(otherSet)      // unions the set with another set and returns the resulting set.
set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
set.clone()              // returns a cloned set.
