import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('Binary Search Tree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  const bst = new BinarySearchTree()

  it('inserts a node with the specified value into the tree', () => {
    bst.insert(3)
    expect(bst.search(3).data).to.equal(3)
  })

  it('returns a node object if found', () => {
    expect(bst.search(3)).to.be.a('object')
  })

  it('returns null if not found', () => {
    expect(bst.search(100)).to.equal(null)
  })

  it("removes an value's node (if exists) from the tree", () => {
    bst.insert(8)
    bst.insert(4)
    bst.insert(10)
    bst.insert(14)
    bst.insert(13)
    bst.insert(6)
    bst.insert(1)
    bst.remove(3)
    bst.remove(10)
    expect(bst.search(3)).to.equal(null)
    expect(bst.search(10)).to.equal(null)
  })

  it("traverse the tree using in-order traversal and apply function on each node's value", () => {
    expect(bst.size()).to.equal(6)
  })

  it('return the number of nodes in the tree', () => {
    expect(bst.count()).to.equal(6)
  })

})
