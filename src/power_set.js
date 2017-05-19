'use strict';

/*
  Class declaration for PowerSet, with a default constructor, and export
  statement making that object the default export from this module.
*/
export default class PowerSet {
  constructor(iterableObject) {
    this.pSet = new Set(iterableObject);
  }

  // INTERROGATION METHODS

  // Returns whether the powerSet is empty.
  isEmpty() {
    return this.pSet.size === 0;
  }

  // Returns whether the powerSet contains the specified element.
  contains(value) {
    return this.pSet.has(value);
  }

  // Returns the count of elements.
  size() {
    return this.pSet.size;
  }

  // DUAL-SET INTERROGATION METHODS

  // Returns the union of this and another powerSet.
  union(otherPowerSet) {
    const newPowerSet = new PowerSet(this.pSet);
    const addToThis = function(element) {
      this.add(element);
    };
    otherPowerSet.pSet.forEach(addToThis, newPowerSet.pSet);
    return newPowerSet;
  }

  // Returns the intersection of this and another powerSet.
  intersect(otherPowerSet) {
    const newPowerSet = new PowerSet();
    const addToThis = function(element) {
      if (otherPowerSet.contains(element)) {
        this.add(element);
      }
    };
    this.pSet.forEach(addToThis, newPowerSet.pSet);
    return newPowerSet;
  }

  // Returns the difference of this from another powerSet.
  difference(otherPowerSet) {
    const newPowerSet = new PowerSet();
    const addToThis = function(element) {
      if (! otherPowerSet.contains(element)) {
        this.add(element);
      }
    };
    this.pSet.forEach(addToThis, newPowerSet.pSet);
    return newPowerSet;
  }

  // Returns whether this is a subset of another powerSet.
  isSubset(otherPowerSet) {
    for (let element of this.pSet) {
      if (! otherPowerSet.contains(element)) {
        return false;
      }
    }
    return true;
  }

  // MANIPULATION METHODS

  // Adds a specified element, if not already in the PowerSet.
  add(value) {
    if (value !== undefined) {
      this.pSet.add(value);
    }
  }

  // Removes a specified element, if in the PowerSet.
  remove(value) {
    this.pSet.delete(value);
  }

  // Returns a copy of the PowerSet.
  clone() {
    return new PowerSet(this.pSet);
  }

  // ELEMENT ITERATION METHODS

  // Executes a specified function on each element.
  forEach(fn) {
    this.pSet.forEach(fn, this.pSet);
  }

}
