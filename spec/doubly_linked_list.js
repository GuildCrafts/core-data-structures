import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doubly_linked_list'

chai.use(chaiChange)
  let dll

describe('DoublyLinkedList()', () => {
  beforeEach(function(){
    dll = new DoublyLinkedList()
  })

  it('exists', function () {
    expect(DoublyLinkedList).to.be.a('function')
  }) 
  
  context('insert()', () => {
    it('inserts a new node and its value to the tail of the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
        
      expect(dll.head.data).to.eql(10)
      expect(dll.head.next.data).to.eql(11)
      expect(dll.head.next.next.data).to.eql(12)
      expect(dll.getTailNode()).to.eql(12)
   })
  })

  context('insertBefore()', () => {
    it('inserts a node and its value before a specified node', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(13)
      dll.insertBefore(13, 12)

      expect(dll.head.next.next.data).to.eql(12)
    })
  })
  
  context('insertFirst()', () => {
    it('inserts a node and its value to the head of the list', () => {
  
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)

      expect(dll.getHeadNode()).to.eql(10)
    })
  })

  context('insertAfter()', () => {
    it('inserts a node and its value after the first node', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(13)
      dll.insertAfter(13, 14)

      expect(dll.tail.data).to.eql(14)
      expect(dll.head.next.next.next.data).to.eql(14)
    })
  })

  context('find()', () => {
    it('searches for a node at a specific position in the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)

      expect(dll.find(1)).to.eql(10)
    })
  })


  context('getHeadNode()', () => {
    it('returns the head node in the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)

      expect(dll.getHeadNode()).to.eql(10)
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)

      expect(dll.getTailNode()).to.eql(13)
    })
  })

  context('remove()', () => {
    it('deletes the last node in the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)
      dll.remove()

      expect(dll.getTailNode()).to.eql(13)
    })
  })
  
  context('removeFirst()', () => {
    it('deletes the head node in the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)
      dll.removeFirst()

      expect(dll.getHeadNode()).to.eql(11)    
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {

      expect(dll.isEmpty()).to.eql(true)
    })

    it('returns false if the list is empty', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)

      expect(dll.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('deletes all the values and nodes in the list', () => {
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)
      dll.insert(13)
      dll.insert(14)
      dll.clear()

      expect(dll).to.eql({head: null, tail: null, _length: 0})
    })
  })

})







 