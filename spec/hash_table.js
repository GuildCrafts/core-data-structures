import chai, {expect} from 'chai'
import HashTable from '../src/hash_table'

let hashTable

describe('HashTable', () => {
  beforeEach(function(){
    hashTable = new HashTable()
  })

  context('put', () => {
    it('adds a key value pair to the hash table', () => {
      hashTable.put('hello', 'world')
      expect(hashTable.hashTable).to.eql({hello:'world'})
    })
  })

  context('get', () => {
    it('returns the value associated with a key', () => {
      hashTable.put('hello', 'world')
      expect(hashTable.get('hello')).to.eql('world')
    })
  })

  context('contains', () => {
    it('returns false if the hash table does not contain the key', () => {
      expect(hashTable.contains('hello')).to.eql(false)
    })
    it('returns true if the hash table contains the key', () => {
      hashTable.put('hello', 'world')
      expect(hashTable.contains('hello')).to.eql(true)
    })
  })

  context('iterate', () => {
    it('takes a callback function and passes it each key and value in sequence', () => {
      hashTable.put('hello', 'world')
      hashTable.put('goodbye', 'world')

      expect(hashTable.iterate((k, v) => [k, v])).to.eql([['hello', 'world'], ['goodbye', 'world']])
    })
  })

  context('remove', () => {
    it('removes a key-value pair by key', () => {
      hashTable.put('hello', 'world')
      expect(hashTable.hashTable).to.include.keys('hello')
      hashTable.remove('hello')
      expect(hashTable.hashTable).to.not.include.keys('hello')
    })
  })

  context ('size', () => {
    it('returns the number of key-value pairs in the hash table', () => {
      hashTable.put('hello', 'world')
      expect(hashTable.size()).to.eql(1)
      hashTable.put('goodbye', 'world')
      expect(hashTable.size()).to.eql(2)
    })
  })

  context('hash', () => {
    it('generates a hash for the supplied key', () => {
      hashTable.hash('hello')
      expect(hashTable.hashTable).to.eql({hello: {}})
    })
  })

})
