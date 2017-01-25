export default class HashTable {
  constructor(){
    this.hashTable = {}
  }

  put(key, value){
    this.hashTable[key] = value
  }

  get(key){
    return this.hashTable[key]
  }

  contains(key){
    return this.hashTable.hasOwnProperty(key)
  }

  iterate(callback){
    const pairs = Object.keys(this.hashTable).map(key => [key, this.hashTable[key]])
    const result = []
    pairs.forEach(pair => result.push(callback(pair[0], pair[1])))
    return result
  }

  remove(key){
    delete this.hashTable[key]
  }

  size(){
    return Object.keys(this.hashTable).map(key => key).length
  }

  hash(key){
    this.hashTable[key] = {}
  }

}
