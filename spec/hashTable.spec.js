import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe.only('HashTable', () => {

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  const ht = new HashTable()

  it('adds a key-value pair to the hash table, deal with collisions using chaining', () => {
    ht.put('Madeon', 'Nonsense')
    ht.put('Porter Robinson', 'Natural Light')
    ht.put('The Chainsmokers', 'Roses')

    expect(ht.length()).to.deep.equal(3)
  })

  it('should update an existing element', () => {
    ht.put('Madeon', 'Ok')

    expect(ht.get('Madeon')).to.deep.equal('Ok')
  })

  it('returns the data associated with key.', () => {
    ht.put('Mt. Eden', 'Oh That I Had')

    expect(ht.get('Mt. Eden')).to.deep.equal('Oh That I Had')
  })

  it('removes a key-value pair by key.', () => {
    ht.put('Rhianna', 'Umbrella')
    ht.put('Kaskade', 'Move For Me')
    ht.remove('Rhianna')

    expect(ht.length()).to.deep.equal(5)
  })

  it('returns the number of key-value pairs in the hash table.', () => {
    expect(ht.length()).to.deep.equal(5)
  })

  it('generates a hash for the key "The xx"', () => {
    ht.put('The xx', 'Hold On')

    expect(ht.calculateHash('The xx')).to.deep.equal()
  })
})
