import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
    // let mySet
    // let emptySet
    // beforeEach(() => {
    //   mySet = new Set()
    //   emptySet= new Set()
    //   mySet.add('foo')
    //   mySet.add(40)
    //   mySet.add('last')
    // })

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds element to set', () => {
      const mySet = new Set(['a', 'b', 3, 'zeze'])
      console.log(mySet)

      expect(() => mySet.add('foo'))
        .to.alter(() => mySet.size(), { from: 4, to: 5 })
      console.log(mySet)
      expect(() => mySet.add('foo'))
        .to.alter(() => mySet.size(), { from: 5, to: 5 })
    })
  })

  context('isEmpty()', () => {
    it('checks if set is empty', () => {
      const mySet = new Set([])
      let EmptySet = mySet.isEmpty()
      expect(EmptySet).to.deep.eql(true)
      mySet.add('lemons')
      let notemptySet = mySet.isEmpty()
      expect(notemptySet).to.deep.equal(false)

    })
  })

  context('contains()', () => {
    it('returns true if set contains element we are passing', () => {
      const mySet = new Set([1, 2, 3, 4])
      let setContains = mySet.contains(3)
      expect(setContains).to.deep.eql(true)
      let doesntContain = mySet.contains(5)
      expect(doesntContain).to.deep.equal(false)

    })
  })

  context('remove()', () => {
    it('removes an element from the set', () => {
      const mySet = new Set([1, 2, 3, 4])
      expect(mySet.set).to.eql([1, 2, 3, 4])
      mySet.remove(3)
      expect(mySet.set).to.eql([1, 2, 4])
    })
  })

  context('forEach()', () => {
    it('takes a callback function and passes it each element of set', () => {
      const mySet = new Set([1, 2, 3, 4])
      const newSet = new Set([])
      mySet.forEach((elem) => {
        let x = ++elem
        newSet.add(x)
      })
      expect(newSet.set).to.eql([2, 3, 4, 5])
    })
  })

})
