import {expect} from 'chai'
import chaiChange from 'chai-change'
import doubleLinkedList from '../src/doubleLinkedList'

describe('doubleLinkedList()', () => {
  let newList
  let emptyList
  beforeEach(() => {
    newList = new doubleLinkedList()
    emptyList = new doubleLinkedList()
    newList.insert('element')
    newList.insert('new-element')
    newList.insert('another-new-element')
  })

  context('Insert()', () => {
    it('it should insert into a new double linked list', () => {
      emptyList.insert('element')
      expect(emptyList).to.deep.equal({
        head :{data: 'element', next: null, prev: null},
        tail: {data: 'element', next: null, prev: null},
        index: 1
      })
    })
    it('it should insert into a exisiting double linked list', () => {
      newList.insert('new-element2')
      expect(newList.tail.data).to.deep.equal('new-element2')
    })
    it('should link node going backward' , () => {
      newList.insert('new-element2')
      expect(newList.tail.prev.data).to.deep.equal('another-new-element')
    })
    it('should link node going forward' , () => {
      newList.insert('new-element2')
      expect(newList.find('another-new-element').next.data).to.deep.equal('new-element2')
    })
  })

  context('find()', () => {
    it('should return a given element in the list', () => {
      expect(newList.find('new-element').data).to.equal('new-element')
    })
    it('should ONLY return the first instance of the element in the list', () => {
      newList.insert('another-new-element')
      expect(newList.find('another-new-element').prev.data).to.equal('new-element')
    })
    it('should return -1 if the element is not in the list', () => {
      expect(newList.find('Over 9000!!!!')).to.equal(-1)
    })
  })

  context('getHeadNode', () => {
    it('returns the head node', () => {
      expect(newList.getHeadNode().data).to.deep.equal('element')
    })
  })
  context('getTailNode', () => {
    it('returns the tail node', () => {
      expect(newList.getTailNode().data).to.deep.equal('another-new-element')
    })
  })
  context('contains', () => {
    it('determines whether or not the list contains the provided data', () => {
      expect(newList.contains('another-new-element')).to.equal(true)
    })
    it('returns false if the list does not contain the target', () => {
      expect(newList.contains('Over 9000!!!!')).to.equal(false)
    })
  })
  context('insertFirst', () => {
    it('should replace the current head' , () => {
      newList.insertFirst('newHead')
      expect(newList.find('newHead').data).to.equal('newHead')
    })
    it('should add the old head as the next node to the current node' , () => {
      newList.insertFirst('newHead')
      expect(newList.find('newHead').next.data).to.equal('element')
    })
    it('should add the old head as the next node to the current node' , () => {
      newList.insertFirst('newHead')
      expect(newList.find('element').prev).to.equal('newHead')
    })
  })
  context('insertBefore', () => {
    it('should insert a new node before the specified node' , () => {
      newList.insertBefore('new-element', 'brand-new-element')
      expect(newList.find('brand-new-element').next.data).to.equal('new-element')
    })
    it('the target node has a new prev property' , () => {
      newList.insertBefore('new-element', 'brand-new-element')
      expect(newList.find('brand-new-element').next.data).to.equal('new-element')
    })

    it('added Node has the appropriate next property' , () => {
      newList.insertBefore('new-element', 'brand-new-element')
      expect(newList.find('element').next.data).to.equal('brand-new-element')
    })
    it('added Node has the appropriate prev property ', () => {
      newList.insertBefore('new-element', 'brand-new-element')
      expect(newList.find('brand-new-element').prev.data).to.equal('element')
    })
  })
  context('insertAfter', () => {
    it('should insert a new node after the specified node' , () => {
      newList.insertAfter('new-element', 'brand-new-element')
     expect(newList.find('another-new-element').prev.data).to.equal('brand-new-element')
    })
    it('previous node has a new next property', () => {
      newList.insertAfter('new-element', 'brand-new-element')
      expect(newList.find('new-element').next.data).to.equal('brand-new-element')
    })
    it('added Node has the appropriate next property' , () => {
      newList.insertAfter('new-element', 'brand-new-element')
      expect(newList.find('brand-new-element').next.data).to.equal('another-new-element')
    })
    it('added Node has the appropriate prev property ', () => {
      newList.insertAfter('new-element', 'brand-new-element')
      expect(newList.find('brand-new-element').prev.data).to.equal('new-element')
    })
  })
  context('remove', () => {
    it('should remove the tail node from the list', () => {
      newList.remove()
    expect(newList.tail.data).to.equal('new-element')
    })
    it('tail node should have a next property of null', () => {
      newList.remove()
    expect(newList.tail.next).to.equal(null)
    })
  })
  context('removeFirst', () => {
    it('should remove the tail node from the list', () => {
      newList.removeFirst()
      expect(newList.head.data).to.equal('new-element')
    })
    it('head node should have a prev property of null', () => {
      newList.removeFirst()
    expect(newList.head.prev).to.equal(null)
    })
  })
  context('isEmpty', () => {
    it('should return true if the list is empty', () => {
      expect(emptyList.isEmpty()).to.equal(true)
    })
    it('should return false if the list has elements in it', () => {
      expect(newList.isEmpty()).to.equal(false)
    })
  })
  context('size()', () => {
    it('should return the size of the list', () => {
      expect(newList.size()).to.equal(3)
    })
  })
  context('clear()', () => {
    it('should remove all elements from the list', () => {
      newList.clear()
      expect(newList.index).to.equal(0)
    })
    it('should remove the head element from the list', () => {
      newList.clear()
      expect(newList.head).to.equal(null)
    })
    it('should remove the tail element from the list', () => {
      newList.clear()
      expect(newList.tail).to.equal(null)
    })
  })
})
