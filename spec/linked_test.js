import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import linkedList from '../src/linkedList'

chai.use(chaiChange)

describe.only('linkedList', () => {

  it('exists', () => {
    expect(linkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('Returns the first node in the llist', () => {
      const llist = new linkedList()
      llist.add(2)
      console.log('llist', llist)
      expect( llist.getHeadNode() ).to.eql( {data : 2, next: null})
    })
    it('Returns the first node in the llist', () => {
      const llist = new linkedList()
        expect( llist.getHeadNode()).to.eql( null )
    })
  })

})
