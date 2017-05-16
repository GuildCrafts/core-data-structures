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
    it('returns a string when given detData().', () => {
      const levelZero = new PriorityNode(
        {data: "level0", priority: 0}
      )
      const data = levelZero.getData()
      expect(data).to.be.a('string')
    })
  })
})
