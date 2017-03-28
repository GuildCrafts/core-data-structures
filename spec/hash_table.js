import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash_table'

chai.use(chaiChange)
let ht
describe('HashTable', () => {
  beforeEach(() => {
    ht = new HashTable()
  })
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })


  it('put(key, value): puts a key value pair into the hash table', () => {
    expect(() => ht.put('asuh','dood'))
    .to.alter(() => ht.size(), {from: 0, to: 1})
    ht.put('asuh','dood')
    expect(ht.get('asuh')).to.eql('dood')
  })

  it('get(key): gets the value associated with the input key', () => {
    ht.put('asuh','dood')
    ht.put('hoi','mate')
    ht.put('cigar','waffle')
    ht.put('smoke','pancake')
    ht.put('pipe', 'bagel')
    expect(ht.get('cigar')).to.eql('waffle')
    expect(ht.get('asuh')).to.eql('dood')
  })

  it('contains(key): returns true if input key exists in has table', () => {
    ht.put('asuh','dood')
    ht.put('hoi','mate')
    ht.put('cigar','waffle')
    ht.put('smoke','pancake')
    ht.put('pipe', 'bagel')
    expect(ht.contains('asuh')).to.equal(true)
    expect(ht.contains('cigarette')).to.equal(false)
  })

  it('iterate(callback): applies the callback on each key value pair', () => {
    ht.put('asuh','dood')
    ht.put('hoi','mate')
    ht.put('cigar','waffle')
    ht.put('smoke','pancake')
    ht.put('pipe', 'bagel')
    let testArray = []
    ht.iterate( (key,value) => {
      let obj = {}
      obj[key] = value
      testArray.push(obj)
    })
    expect(ht.iterate((key, value) => {
      testArray.some(obj => obj[key] === value)
    }))
  })

  it('remove(key): removes node associated with input key from hash table', () => {
    ht.put('asuh','dood')
    ht.put('hoi','mate')
    ht.put('cigar','waffle')
    ht.put('smoke','pancake')
    ht.put('pipe', 'bagel')
    expect(() => ht.remove('asuh'))
    .to.alter(() => ht.size(), {from:5, to:4})
    ht.remove('cigar')
    expect(ht.contains('cigar')).to.equal(false)
  })

  it('size(): returns the number of elements in the hash table', () => {
    ht.put('asuh','dood')
    ht.put('hoi','mate')
    ht.put('cigar','waffle')
    ht.put('smoke','pancake')
    ht.put('pipe', 'bagel')
    expect(ht.size()).to.eql(5)
  })

})
