'use strict'

import LinkedList from 'linkedlist'

export default class HashTable {
  //check
  constructor(){
    this.tablesize = 5831
    this.table = []
    for (let bucket = 0; bucket < this.tablesize; bucket++){
      this.table[bucket] = new LinkedList()
    }
  }

  put(key, value){
    let index = (this.hash(key) % this.tablesize)
    this.table[index].push({ key , value })
  }

  get(key){
    let index = (this.hash(key) % this.tablesize)
    let bucket = this.table[index]
    let currentKey = bucket.current.key
    if( currentKey === key) {return bucket.current.value}
    while(currentKey !== key){
      currentKey = currentKey.next
    }
  }

  contains(key){
    let index = this.hash(key) % this.tablesize
    let bucket = this.table[index]
    let currentKey = bucket.current.key
    if( currentKey === key) {return true}
    while(currentKey !== key){
      currentKey = currentKey.next
    }
    return false
  }

  iterate(callback){
    let result = []
    this.table.forEach(bucket => {
      if(bucket.length === 0){
        return
      }else{
        let current = bucket.current
        while(current.next !== undefined){
          result.push(callback(bucket.current.key, bucket.current.value))
          current = current.next
        }
        result.push(callback(bucket.current.key, bucket.current.value))
      }
    })
    return result

  }




  remove(key){
    let index = this.hash(key) % this.tablesize
    let bucket = this.table[index]
    let currentKey = bucket.current.key
    if( currentKey === key) {bucket.removeCurrent() }
    while(currentKey !== key){
      currentKey = currentKey.next
    }
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
