import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('Linked List', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  describe('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const linkedList = new LinkedList()

      expect(() => linkedList.insert('foo'))
        .to.alter(() => linkedList.count, { from: 0, to: 1 })
      expect(linkedList.getHeadNode().data)
        .to.equal('foo')
      expect(() => linkedList.insert('boo'))
        .to.alter(() => linkedList.count, { from: 1, to: 2 })
       expect(linkedList.getTailNode().data)
        .to.equal('boo')
    })
  })
})
