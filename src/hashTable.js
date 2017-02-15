'use strict'

export default class HashTable {
  //check
  constructor(){
    this.tablesize = 5831
    this.table = []
    for (let i = 0; i < this.tablesize; i++){
      this.table.push([])
    }
  }

  put(key, value){
    let index = (this.hash(key) % 5831)
    console.log('index', index)
    this.table[index].push(value)
    console.log('this.table[index]', this.table[index])
  }

  get(key){
    let index = this.hash(key)
    return this.table[index].find(key)
  }

  contains(key){
    let index = this.hash(key)
    this.table[index].find(key)
  }

  iterate(callback){
    this.table.forEach(array => {
      array.forEach(callback)
    })
  }

  remove(key){
    let index = this.hash(key)
    let deeperIndex = this.table[index].indexOf(key)
    this.table[index].splice(deeperIndex, 1)
  }

  size(){
    let size = 0
    this.table.forEach(bucket => {
      size += bucket.length
    })
    return size
  }

// this is known as the dbj2 hash algorithm
  hash(key){
    let hashIndex = 5831
    for(let i = 0; i < key.length; i++){
      hashIndex = ((hashIndex * 33) + key.charCodeAt(i))
    }
    return hashIndex
  }
}

// code, index, collection) => sum += (code - 97)
