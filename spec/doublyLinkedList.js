import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doublyLinkedList'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('adds a new node to the linked list when empty', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      expect(myDoublyLinkedList.size()).to.eql(1)
    })
    it('adds new node to the end if list is not empty', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      myDoublyLinkedList.insert("Choronzon")
      expect(myDoublyLinkedList.size()).to.eql(3)
      expect(myDoublyLinkedList.getHeadNode().next.next.previous.data).to.eql("Beelzebub")
    })
  })

  context('getHeadNode()', () => {
    it('returns the data for the head node of the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.getHeadNode().data).to.eql("Azazel")
    })
    it('returns null if list is empty', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(myDoublyLinkedList.getHeadNode()).to.eql(null)
    })
  })

  context('size()', () => {
    it('returns the total number of nodes in the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.size()).to.eql(2)
    })
    it('returns 0 if there are no nodes in the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(myDoublyLinkedList.size()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if there are no nodes in the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(myDoublyLinkedList.isEmpty()).to.eql(true)
    })
    it('returns false if there are nodes in the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      expect(myDoublyLinkedList.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('Resets the list to empty', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      expect(myDoublyLinkedList.size()).to.eql(1)
      myDoublyLinkedList.clear()
      expect(myDoublyLinkedList.size()).to.eql(null)
      expect(myDoublyLinkedList.isEmpty()).to.eql(true)
      expect(myDoublyLinkedList.getHeadNode()).to.eql(null)
    })
  })

  context('getTailNode()', () => {
    it('returns the tail node of a list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.getTailNode().data).to.eql("Beelzebub")
    })
  })

  context('contains()', () => {
    it('returns true if the list contains the value provided', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.contains("Beelzebub")).to.eql(true)
    })
    it('returns false if the list contains the value provided', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.contains("Choronzon")).to.eql(false)
    })
  })

  context('find()', () => {
    it('Returns a node containing the provided value', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.find("Azazel").data).to.eql("Azazel")
    })
    it('Returns -1 if no nodes contain provided value', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      expect(myDoublyLinkedList.find("Choronzon")).to.eql(-1)
    })
    it('Returns the first node containing the provided value', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      myDoublyLinkedList.insert("Azazel")
      expect(myDoublyLinkedList.find("Azazel").next.next.data).to.eql("Azazel")
      expect(myDoublyLinkedList.find("Azazel").next.data).to.eql("Beelzebub")
    })
  })

  context('insertFirst()', () => {
    it('Inserts new node at begining of list, which links to original' +
      'head node', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insertFirst("Beelzebub")
      expect(myDoublyLinkedList.getHeadNode().data).to.eql("Beelzebub")
      expect(myDoublyLinkedList.getHeadNode().next.data).to.eql("Azazel")
      expect(myDoublyLinkedList.getTailNode().previous.data).to.eql("Beelzebub")
    })
  })

  context('insertAfter()', () => {
    it('Inserts new node at begining of list, which links to original' +
      'head node', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Choronzon")
      myDoublyLinkedList.insertAfter("Azazel", "Beelzebub")
      expect(myDoublyLinkedList.find("Beelzebub").previous.data).to.eql("Azazel")
      expect(myDoublyLinkedList.find("Beelzebub").next.data).to.eql("Choronzon")
    })
    it('returns -1 if the searchTerm does not exist in the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Choronzon")
      expect(myDoublyLinkedList.insertAfter("Beelzebub", "Demogorgon")).to.eql(-1)
    })
  })

  context('insertBefore()', () => {
    it('Inserts new node before specified item of the list, which links to' +
      'original head node', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Choronzon")
      myDoublyLinkedList.insertBefore("Choronzon", "Beelzebub")
      expect(myDoublyLinkedList.find("Beelzebub").next.data).to.eql("Choronzon")
    })
    it('returns -1 if the searchTerm does not exist in the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Choronzon")
      expect(myDoublyLinkedList.insertBefore("Beelzebub", "Demogorgon")).to.eql(-1)
    })
    it("Changes the next/prev values of the node previous to node with the" +
      "searchTerm to be the value of the new node", () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Choronzon")
      myDoublyLinkedList.insertBefore("Choronzon", "Beelzebub")
      expect(myDoublyLinkedList.getHeadNode().data).to.deep.equal("Azazel")
      expect(myDoublyLinkedList.getHeadNode().next.data).to.deep.equal("Beelzebub")
      expect(myDoublyLinkedList.getTailNode().data).to.deep.equal("Choronzon")
      expect(myDoublyLinkedList.getTailNode().previous.data).to.deep.equal("Beelzebub")
    })
  })

  context('removeFirst()', () => {
    it('Removes the head of the list, making the second item the new head', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      myDoublyLinkedList.insert("Choronzon")
      expect(myDoublyLinkedList.size()).to.deep.equal(3)
      myDoublyLinkedList.removeFirst()
      expect(myDoublyLinkedList.size()).to.deep.equal(2)
      expect(myDoublyLinkedList.getHeadNode().data).to.deep.equal("Beelzebub")
      expect(myDoublyLinkedList.getHeadNode().previous).to.deep.equal(null)
      expect(myDoublyLinkedList.getHeadNode().next.data).to.deep.equal("Choronzon")
    })
  })

  context('remove()', () => {
    it('removes the tail node of the list, making the next value of the second'+
      'to last node equal null', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert("Azazel")
      myDoublyLinkedList.insert("Beelzebub")
      myDoublyLinkedList.insert("Choronzon")
      expect(myDoublyLinkedList.size()).to.deep.equal(3)
      myDoublyLinkedList.remove()
      expect(myDoublyLinkedList.size()).to.deep.equal(2)
      expect(myDoublyLinkedList.getTailNode().data).to.deep.equal("Beelzebub")
      expect(myDoublyLinkedList.getTailNode().next).to.deep.equal(null)
      expect(myDoublyLinkedList.getTailNode().previous.data).to.deep.equal("Azazel")
    })
  })

})
