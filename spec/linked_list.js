import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  context('insert()', () => {
    it('inserts the value to the list', () => {
      const ll = new LinkedList()
      ll.insert(10)

    expect(ll).to.eql(10)
    })
  })

  // context('getHeadNode()', () => {
  //   it('returns the head node in the list', () => {
  //     const ll = new LinkedList()
  //     ll.insert(10)
  //     ll.insert(11)
  //     ll.insert(12)
  //     ll.insert(13)

  //     expect(ll.getHeadNode()).to.eql({data: 10, next: {data: 11, next: {data: 12, next: {data: 13, next: null}}}})
  //   })
  // })

  // context('getTailNode()', () => {
  //   it('returns the last node in the list', () => {
  //     const ll = new LinkedList()
  //     ll.insert(10)
  //     ll.insert(11)
  //     ll.insert(12)
  //     ll.insert(13)

  //     expect(ll.getTailNode()).to.eql({data: 13, next: null})
  //   })
  // })

})