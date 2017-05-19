import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list2'

chai.use(chaiChange)

describe('LinkedList2', function() {
  'use strict'

  it('is a function', function() {
    expect(LinkedList).to.be.a('function')
  })

  context('empty list interrogation', function() {
    const emptyList = new LinkedList()
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
    const lList = new LinkedList()
    lList.insert('bad')
    lList.insert('ok')
    lList.insert('good')
    it('the element getHeadNode() returns has data “bad”', function() {
      expect(lList.getHeadNode().getData()).to.be.equal('bad')
    })
    it('the element getTailNode() returns has data “good”', function() {
      expect(lList.getTailNode().getData()).to.be.equal('good')
    })
    it('contains("ok") returns true', function() {
      expect(lList.contains('ok')).to.be.true
    })
    it('contains("mediocre") returns false', function() {
      expect(lList.contains('mediocre')).to.be.false
    })
    it('find("ok") returns a node with data “ok”', function() {
      expect(lList.find('ok').getData()).to.be.equal('ok')
    })
    it('find("mediocre") returns -1', function() {
      expect(lList.find('mediocre')).to.be.equal(-1)
    })
    it('isEmpty() returns false', function() {
      expect(lList.isEmpty()).to.be.false
    })
    it('size() returns 3', function() {
      expect(lList.size()).to.be.equal(3)
    })
  })

  context('list manipulation', function() {
    const lList = new LinkedList()
    lList.insert('bad')
    lList.insert('ok')
    lList.insert('good')
    lList.insertFirst('horrible')
    it(('insertFirst() changes the head (first) element'), function() {
      expect(lList.getHeadNode().getData()).to.be.equal('horrible')
    })
    it('insertFirst() does not change the tail (last) element', function() {
      expect(lList.getTailNode().getData()).to.be.equal('good')
    })
    it('no element has data “mediocre”', function() {
      expect(lList.contains('mediocre')).to.be.false
    })
    it('insertBefore() inserts an element where specified', function() {
      lList.insertBefore('ok', 'mediocre')
      expect(lList.contains('mediocre')).to.be.true
    })
    it('insertBefore() inserts nothing if no target exists', function() {
      const lSizeOld = lList.size();
      lList.insertBefore('stupendous', 'superb')
      expect(lList.size()).to.be.equal(lSizeOld)
    })
    it('insertAfter() not after the last element does not change it', function() {
      lList.insertAfter('horrible', 'lousy')
      expect(lList.getTailNode().getData()).to.be.equal('good')
    })
    it('insertAfter() after the last element changes it', function() {
      lList.insertAfter('good', 'excellent')
      expect(lList.getTailNode().getData()).to.be.equal('excellent')
    })
    it('insertAfter() inserts nothing if no target exists', function() {
      const lSizeOld = lList.size();
      lList.insertAfter('superb', 'stupendous')
      expect(lList.size()).to.be.equal(lSizeOld)
    })
    it('remove() changes the tail (last) element', function() {
      lList.remove()
      expect(lList.getTailNode().getData()).to.be.equal('good')
    })
    it('removeFirst() changes the head (first) element', function() {
      lList.removeFirst()
      expect(lList.getHeadNode().getData()).to.be.equal('lousy')
    })
    it('clear() makes the list’s size 0', function() {
      lList.clear()
      expect(lList.size()).to.be.equal(0)
    })
  })

})
