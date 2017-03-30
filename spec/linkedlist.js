import {expect} from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

describe('linkedList()', () => {
  let newList
  let emptyList
  beforeEach(() => {
    newList = new LinkedList()
    emptyList = new LinkedList()
    newList.insert('element')
    newList.insert('new-element')
    newList.insert('another-new-element')
  })
  it('it should insert into a linked list', () => {
    expect(newList.insert('element')).to.deep.equal({
      data: 'element', next: null
    })
  })

  it('it should insert into a linked list', () => {

    expect(newList.getHeadNode().data).to.deep.equal('element')
  })

  it('check the size of the linked list', () => {
    expect(emptyList.size()).to.deep.equal(0)

    emptyList.insert('element')
    emptyList.insert('new-element')

    expect(emptyList.size()).to.deep.equal(2)
  })

  it('returns the last node', () => {
    expect(newList.getTailNode()).to.deep.equal({data: 'another-new-element', next: null})
    })

  it('determines whether or not the list contains the provided data', () => {
    expect(newList.contains('another-new-element')).to.equal(true)
      })

  context('find', () => {
    it('should return the first element containing the target', () => {
      expect(newList.find('new-element').data).to.equal('new-element')
    })
    it('should return the ONLY first element containing the target', () => {
      newList.insert('element') // adds another instance of element to the tail
      expect(newList.find('element').next.data).to.equal('new-element')
    })
    it('should return -1 if the list does not contain target', () => {
      expect(newList.find('new-FAKE-element')).to.equal(-1)
    })
  })

  context('insertFirst', () => {
    it('should replace the current head' , () => {
      expect(newList.insertFirst('newHead')).to.equal(newList.head)
    })
    it('should add the old head as the next node to the current node' , () => {
      expect(newList.insertFirst('newHead').next.data).to.equal('element')
    })
  })
  context('insertAfter', () => {
    it('should insert a new node after the specified node' , () => {
      expect(newList.insertAfter('new-element', 'brand-new-element').next.data).to.equal('another-new-element')
    })
    it('should make a new next property of the previous node' , () => {
      newList.insertAfter('new-element', 'brand-new-element')
      expect(newList.find('new-element').next.data).to.equal('brand-new-element')
    })
  })
  context('insertBefore', () => {
    it('should insert a new node before the specified node' , () => {
      expect(newList.insertBefore('new-element', 'brand-new-element').next.data).to.equal('new-element')
    })
    it('should make a new next property of the previous node' , () => {
      newList.insertBefore('new-element', 'brand-new-element')
      expect(newList.find('element').next.data).to.equal('brand-new-element')
    })
  })

  context('remove', () => {
    it('should remove the tail node from the list', () => {
      newList.remove()
    expect(newList.tail.data).to.equal('new-element')
    })
  })

  context('removeFirst', () => {
    it('should remove the tail node from the list', () => {
      newList.removeFirst()
      expect(newList.head.data).to.equal('new-element')
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
