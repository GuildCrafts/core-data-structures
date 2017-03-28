import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash_table'

chai.use(chaiChange)

describe('HashTable', () => {
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('puts a key value pair into the hash table')
  })
})
