import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import set from '../src/linkedlist'

chai.use(chaiChange)

describe('linkedlist', () => {
  'use strict'

  it('exists', () => {
    expect(set).to.be.a('function')
  })

  describe('insertFirst()', () => {
    it('Inserts a node with the provided data to the head of the list'), () => {
      const linkedList = new LinkedList
      linkedList.insertFirst("someData")
      expect(linkedList.size).to.be.equal(1)
    }; //this semicolon set the mocha test to pending? otherwise syntax error?
  })
})
