import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityNode from '../src/priority_node'

chai.use(chaiChange)

describe('PriorityNode', () => {
  'use strict'

  it('is a function', () => {
    expect(PriorityNode).to.be.a('function')
  })

  context('getData()', () => {
    it('returns the correct type, if string', () => {
      const levelZero = new PriorityNode({data: "level0", priority: 0})
      const data = levelZero.getData()
      expect(data).to.be.a('string')
    })
    it('returns the correct value, if a string', () => {
      const levelZero = new PriorityNode({data: "level0", priority: 0})
      const data = levelZero.getData()
      expect(data).to.be.equal('level0')
    })
    it('returns the correct type, if number', () => {
      const levelZero = new PriorityNode({data: 0, priority: 0})
      const data = levelZero.getData()
      expect(data).to.be.a('number')
    })
    it('returns the correct value, if a number', () => {
      const levelZero = new PriorityNode({data: 0, priority: 0})
      const data = levelZero.getData()
      expect(data).to.be.equal(0)
    })
  })
})
