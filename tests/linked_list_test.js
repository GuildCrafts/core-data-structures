import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a new list node to our list.', () => {
      const myLL = new LinkedList()

      expect(() => myLL.insert('foo'))
        .to.alter(() => myLL.size, { from: 0, to: 1 })
    })
  })

})
