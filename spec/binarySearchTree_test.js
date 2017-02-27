import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert() & search()', () => {
    it('adds points and serches for them', () => {
      const myBinarySearchTree = new BinarySearchTree()
      myBinarySearchTree.insert(3)
      myBinarySearchTree.insert(1)
      myBinarySearchTree.insert(6)
      myBinarySearchTree.insert(8)
      expect(myBinarySearchTree.search(8)).to.eql(8)
    })


  })
})
