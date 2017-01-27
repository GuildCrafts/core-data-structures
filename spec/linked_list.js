import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)
  let llist

describe('LinkedList', function() {
  beforeEach(function() {
    llist = new LinkedList()
  })

  it('exists', function() {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode', function() {
    it('returns the first node in the list', function() {
      llist.insert('aileen')
      llist.insert('claire')
      llist.insert('lagunzad')
      llist.insert('santos')

      expect(llist.getHeadNode().data).to.equal('aileen')
    })
  })

  context('getTailNode', function() {
    it('returns the tail node in the list', function() {
      llist.insert('aileen')
      llist.insert('claire')
      llist.insert('lagunzad')
      llist.insert('santos')

      expect(llist.getTailNode().data).to.equal('santos')
    })
  })

  context('insert', function() {
    it('inserts a node with the provided data to the tail of the list', function() {
      llist.insert('aileen is super cool')

      expect(llist.getTailNode().data).to.equal('aileen is super cool')
    })
  })

  context('insertFirst', function() {
    it('inserts a node with the provided data to the head of the list', function() {
      llist.insertFirst('aileen')
      llist.insert('claire')
      llist.insert('santos')

      expect(llist.getHeadNode().data).to.equal('aileen')
    })
  })

  context('insertBefore', function() {
    it("inserts a node containing the data 'claire' before the node containg the data 'aileen'", function() {
      llist.insert('claire')
      llist.insert('santos')
      llist.insertBefore('claire', 'aileen')

      expect(llist.getHeadNode().data).to.equal('aileen')
    })
  })

})