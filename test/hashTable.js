import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'
chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  const myHashTable = new HashTable()

  context('put()', () => {
    it('adds a key-value pair to the hash table.', () => {
      expect(() => myHashTable.put("name", "Zanzibar"))
        .to.alter(() => myHashTable.size(), { from: 0, to: 1 })
    })
  })

  context('get()', () => {
    it('returns the data associated with key.', () => {
      expect(() => myHashTable.get("name"))
        .to.be(["Zanzibar"])
    })
  })

  context('contains()', () => {
    it('returns true if the hash table contains the key.', () => {
      expect(() => myHashTable.contains("name"))
        .to.be(true)
    })
  })

  context('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence.', () => {
      expect(() => myHashTable.iterate((k, v) => `${k}: ${v}`))
        .to.be('name: Zanzibar')
    })
  })

  context('remove()', () => {
    it('removes a key-value pair by key.', () => {
      expect(() => myHashTable.remove("name"))
        .to.alter(() => myHashTable.size(), { from: 1, to: 0 })
    })
  })

  context('size()', () => {
    it('returns the number of key-value pairs in the hash table.', () => {
      expect(() => myHashTable.size())
        .to.be(0)
    })
  })

  context('CLASS METHOD: hash()', () => {
    it('generates a hash for the given key', () => {
      expect(() => myHashTable.contains("name"))
        .to.be(true)
    })
  })

})


// ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table.
// ht.get("name")              // returns the data associated with key.
// ht.contains("name")         // returns true if the hash table contains the key.
// ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
// ht.remove("name")           // removes a key-value pair by key.
// ht.size()                   // returns the number of key-value pairs in the hash table.
// HashTable.hash("name")      // generates a hash for the key "name"
