import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doubly_linked_list'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a new doubly linked list node to our list.', () => {
      const myDLL = new DoublyLinkedList()

      expect(() => myDLL.insert('zion'))
        .to.alter(() => myDLL.size, { from: 0, to: 1 })
    })
  })
})
