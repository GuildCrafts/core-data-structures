import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Treenode from '../src/treeNode'

chai.use(chaiChange)

describe('Treenode', () => {
  'use strict'

  it('exists', () => {
    expect(Treenode).to.be.a('function')
  })

  context('getData()', () => {
    it('Retrieves the value of the tree node.', () => {
      const myTreeNode = new Treenode(12)
      expect(myTreeNode.getData()).to.equal(12)
    })
  })

  context('setLeft()', () => {
    it('sets the left tree node.', () => {
      const myTreeNode = new Treenode(10)
      const leftTreeNode = new Treenode(2)
      myTreeNode.setLeft(leftTreeNode)
      expect(myTreeNode.left).to.equal(leftTreeNode)
    })
  })

  context('setRight()', () => {
    it('sets the right tree node.', () => {
      const myTreeNode = new Treenode(12)
      const rightTreeNode = new Treenode(22)
      myTreeNode.setRight(rightTreeNode)
      expect(myTreeNode.right).to.equal(rightTreeNode)
    })
  })
  context('getLeft()', () => {
    it('Retrieves the left tree node.', () => {
      const myTreeNode = new Treenode(12)
      const leftTreeNode = new Treenode(5)
      myTreeNode.setLeft(leftTreeNode)
      expect(myTreeNode.getLeft()).to.equal(leftTreeNode)
    })
  })

  context('getRight()', () => {
    it('Retrieves the right tree node.', () => {
      const myTreeNode = new Treenode(12)
      const rightTreeNode = new Treenode(22)
      myTreeNode.setRight(rightTreeNode)
      expect(myTreeNode.getRight()).to.equal(rightTreeNode)
    })
  })
})
