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
       mySet.indexOf(1), {from: -1, to: 3})
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
//why do we not need to call mySet.set? look into tis further
  context('remove()', () => {
    it('removes an element if it exists', () => {
      // console.log(mySet.indexOf(40)) why does this break it?
      // console.log('mySet.set----->',mySet.set.indexOf(40)) and why does this does not
      expect(() => {mySet.remove(40).to.alter(() =>
      mySet.indexOf(40), {from: 1, to: -1})
      })
    })
  })

  context('forEach()', () => {
     it('takes a callback function and passes it each element of set', () => {
       const mySet = new Set([1, 2, 3, 4])
       const newSet = new Set([])
       mySet.forEach((elem) => {
        //  console.log('Begingig elem---->', elem);
         let x = ++elem
        //  console.log('Modified elem---->', elem);
        //  console.log('Begingig x---->', x);
         newSet.add(x)
       })
      //  console.log(mySet)
      //  console.log(newSet)
     })
   })

  context('size()' ,() => {
    it('returns the number of elements in the set' , () => {
      expect(mySet.size()).to.equal(3)
    })
  })

  // context('Union()' , () => {
  //   it('should unite two sets', () => {
  //     const set2 = new Set ()
  //     set2.set = [1,2,3,40,77]
  //     console.log(mySet);
  //     console.log(set2)
  //     console.log(mySet.union(set2))
  //   })
  // })

})
