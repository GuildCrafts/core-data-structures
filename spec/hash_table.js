import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash_table'

chai.use(chaiChange)


describe('Hash Table', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })
  context('put()',() => {
    it('adds an element to the hash table', () => {
      const myHashTable = new HashTable()
      myHashTable.put('funky', 'squirrel')
      expect(myHashTable.get( 'funky' )).to.deep.equal('squirrel')
    })
  })

  context('contains()', () => {
    it('returns true if hashtable contains key', () => {
      const myHashTable = new HashTable()
      myHashTable.put('a', '1')
      myHashTable.put('b', '2')
      expect(myHashTable.contains( 'b' )).to.be.true
    })

    it('returns false if hashtable does not contain key', () => {
      const myHashTable = new HashTable()
      myHashTable.put('a', '1')
      myHashTable.put('b', '2')
      myHashTable.print()
      expect(myHashTable.contains( 'y' )).to.be.false
    })
  })

  context('size()', () => {
    it('returns size of hashtable', () => {
      const myHashTable = new HashTable()
      myHashTable.put('a', '1')
      myHashTable.put('b', '2')
      expect(myHashTable.size( )).to.deep.equal(2)
    })
  })
})
