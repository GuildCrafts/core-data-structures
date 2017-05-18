import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doubly_linked_list'

chai.use(chaiChange)

describe('DoublyLinkedList', function() {
  'use strict'

  it('is a function', function() {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('empty list interrogation', function() {
    const emptyList = new DoublyLinkedList()
    it('getHeadNode() returns null', function() {
      expect(emptyList.getHeadNode()).to.be.null
    })
    it('getTailNode() returns null', function() {
      expect(emptyList.getTailNode()).to.be.null
    })
    it('isEmpty() returns true', function() {
      expect(emptyList.isEmpty()).to.be.true
    })
    it('size() returns 0', function() {
      expect(emptyList.size()).to.be.equal(0)
    })
    it('contains("x") returns false', function() {
      expect(emptyList.contains('x')).to.be.false
    })
    it('find("x") returns -1', function() {
      expect(emptyList.find('x')).to.be.equal(-1)
    })
  })

  context('non-empty list interrogation', function() {
    const dlList = new DoublyLinkedList()
    dlList.insert('bad')
    dlList.insert('ok')
    dlList.insert('good')
    it('the element getHeadNode() returns has data “bad”', function() {
      expect(dlList.getHeadNode().getData()).to.be.equal('bad')
    })
    it('the element getTailNode() returns has data “good”', function() {
      expect(dlList.getTailNode().getData()).to.be.equal('good')
    })
    it('contains("ok") returns true', function() {
      expect(dlList.contains('ok')).to.be.true
    })
    it('contains("mediocre") returns false', function() {
      expect(dlList.contains('mediocre')).to.be.false
    })
    it('find("ok") returns a node with data “ok”', function() {
      expect(dlList.find('ok').getData()).to.be.equal('ok')
    })
    it('find("mediocre") returns -1', function() {
      expect(dlList.find('mediocre')).to.be.equal(-1)
    })
    it('isEmpty() returns false', function() {
      expect(dlList.isEmpty()).to.be.false
    })
    it('size() returns 3', function() {
      expect(dlList.size()).to.be.equal(3)
    })
  })

  context('list manipulation', function() {
    const dlList = new DoublyLinkedList()
    dlList.insert('bad')
    dlList.insert('ok')
    dlList.insert('good')
    dlList.insertFirst('horrible')
    it(('insertFirst() changes the head (first) element'), function() {
      expect(dlList.getHeadNode().getData()).to.be.equal('horrible')
    })
    it('insertFirst() does not change the tail (last) element', function() {
      expect(dlList.getTailNode().getData()).to.be.equal('good')
    })
    it('no element has data “mediocre”', function() {
      expect(dlList.contains('mediocre')).to.be.false
    })
    it('insertBefore() inserts an element where specified', function() {
      dlList.insertBefore('ok', 'mediocre')
      expect(dlList.contains('mediocre')).to.be.true
    })
    it('insertBefore() inserts nothing if no target exists', function() {
      const dlSizeOld = dlList.size();
      dlList.insertBefore('stupendous', 'superb')
      expect(dlList.size()).to.be.equal(dlSizeOld)
    })
    it('insertAfter() not after the last element does not change it', function() {
      dlList.insertAfter('horrible', 'lousy')
      expect(dlList.getTailNode().getData()).to.be.equal('good')
    })
    it('insertAfter() after the last element changes it', function() {
      dlList.insertAfter('good', 'excellent')
      expect(dlList.getTailNode().getData()).to.be.equal('excellent')
    })
    it('insertAfter() inserts nothing if no target exists', function() {
      const dlSizeOld = dlList.size();
      dlList.insertAfter('superb', 'stupendous')
      expect(dlList.size()).to.be.equal(dlSizeOld)
    })
    it('remove() changes the tail (last) element', function() {
      dlList.remove()
      expect(dlList.getTailNode().getData()).to.be.equal('good')
    })
    it('removeFirst() changes the head (first) element', function() {
      dlList.removeFirst()
      expect(dlList.getHeadNode().getData()).to.be.equal('lousy')
    })
    it('clear() makes the list’s size 0', function() {
      dlList.clear()
      expect(dlList.size()).to.be.equal(0)
    })
  })

})
