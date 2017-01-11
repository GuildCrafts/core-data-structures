import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'
  let mySet
  let emptySet
  beforeEach(() => {
    mySet = new Set()
    emptySet= new Set()
    mySet.add('foo')
    mySet.add(40)
    mySet.add('last')
  })


  context('add()', () => {
    it('adds an element to the set', () => {
     expect(() => { mySet.add(56).to.alter(() =>
       mySet.set.indexOf(1), {from: -1, to: 3})
     })
    })
    it('should not repeat elements in the set', () => {
      expect(() => { mySet.add('foo').to.equal(null)
      })
    })
  })

  context('isEmpty()', () => {
    it('return true if the set is empty', () => {
      expect(emptySet.isEmpty()).to.equal(true)
      })

      it('return false if the set is not empty', () => {
        expect(mySet.isEmpty()).to.equal(false)
        })
      })

  context('contains()', () => {
    it('returns true if the set contains the element', () => {
      expect(mySet.contains(40)).to.equal(true)
    })
    it('returns false if the set does not contain the element', () => {
      expect(mySet.contains('OVER 9000')).to.equal(false)
    })
  })



})
