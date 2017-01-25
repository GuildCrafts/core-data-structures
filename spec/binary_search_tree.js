import chai, {expect} from 'chai'
import BinarySearchTree from '../src/binary_search_tree'

let bst
describe('BinarySearchTree', () => {
  beforeEach(() => {
    bst = new BinarySearchTree()
  })

  context('insert', () => {
    it('inserts a node with the specified value into the tree', () => {
      bst.insert(3)
      bst.insert(2)
      bst.insert(5)

      expect(bst.root).to.eql({value: 3, left: {value:2, left: null, right: null}, right: {value:5, left: null, right: null} })
    })
  })

  context('search', () => {
    it('returns the node object', () => {
      bst.insert(3)
      expect(bst.search(3)).to.eql({value: 3, left: null, right: null})
    })
    it('returns null if the node is not found', () => {
      expect(bst.search(3)).to.eql(null)
    })
  })

  context('remove', () => {
    it('removes a node from the tree if it exists', () => {
      bst.insert(3)
      bst.insert(4)
      expect(bst.root).to.eql({value: 3, left: null, right: { value: 4, left: null, right: null }})
      bst.remove(3)
      expect(bst.root).to.eql({value:4, left: null, right: null})
    })
  })

  context('traverse', () => {
    it('traverses the tree and performs a callback on all nodes in the specifed order', () => {
      bst.insert(3)
      bst.insert(4)
      expect(bst.root).to.eql({ value: 3, left: null, right: { value: 4, left: null, right: null } })
      bst.traverse('inOrder', (node) => node.value += 1 )
      expect(bst.root).to.eql({ value: 4, left: null, right: { value: 5, left: null, right: null } })
    })
  })

  context('count', () => {
    it('counts the number of nodes in the tree', () => {
      bst.insert(3)
      bst.insert(4)
      bst.insert(1)
      expect(bst.count()).to.eql(3)
    })
    it('should return 0 if there are no nodes', () => {
      expect(bst.count()).to.eql(0)
    })
  })
})
