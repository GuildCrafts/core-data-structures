import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('adds a new node to the linked list when empty', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      expect(myLinkedList.size()).to.eql(1)
    })
    it('adds new node to the end if list is not empty', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.size()).to.eql(2)
      expect(myLinkedList.getHeadNode()).to.eql({data: "Azazel", next:
        {data: "Beelzebub", next: null}})
    })
  })

  context('getHeadNode()', () => {
    it('returns the data for the head node of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.getHeadNode()).to.eql({data: "Azazel", next:
        {data: "Beelzebub", next: null}})
    })
    it('returns null if list is empty', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.getHeadNode()).to.eql(null)
    })
  })

  context('size()', () => {
    it('returns the total number of nodes in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.size()).to.eql(2)
    })
    it('returns 0 if there are no nodes in the list', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.size()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if there are no nodes in the list', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.isEmpty()).to.eql(true)
    })
    it('returns false if there are nodes in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      expect(myLinkedList.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('Resets the list to empty', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      expect(myLinkedList.size()).to.eql(1)
      myLinkedList.clear()
      expect(myLinkedList.size()).to.eql(null)
      expect(myLinkedList.isEmpty()).to.eql(true)
      expect(myLinkedList.getHeadNode()).to.eql(null)
    })
  })

  context('getTailNode()', () => {
    it('returns the tail node of a list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.getTailNode()).to.eql({data: "Beelzebub", next: null})
    })
  })

  context('contains()', () => {
    it('returns true if the list contains the value provided', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.contains("Beelzebub")).to.eql(true)
    })
    it('returns false if the list contains the value provided', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.contains("Choronzon")).to.eql(false)
    })
  })

  context('find()', () => {
    it('Returns a node containing the provided value', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.find("Azazel")).to.eql({data: "Azazel", next:
        {data: "Beelzebub", next: null}})
    })
    it('Returns -1 if no nodes contain provided value', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      expect(myLinkedList.find("Choronzon")).to.eql(-1)
    })
    it('Returns the first node containing the provided value', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      myLinkedList.insert("Azazel")
      expect(myLinkedList.find("Azazel")).to.eql({data: "Azazel", next: {data:
        "Beelzebub", next: {data: "Azazel", next: null}}})
    })
  })

  context('insertFirst()', () => {
    it('Inserts new node at begining of list, which links to original' +
      'head node', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insertFirst("Beelzebub")
      expect(myLinkedList.getHeadNode()).to.eql({data: "Beelzebub", next:
        {data: "Azazel", next: null}})
    })
  })

  context('insertAfter()', () => {
    it('Inserts new node at begining of list, which links to original' +
      'head node', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Choronzon")
      myLinkedList.insertAfter("Azazel", "Beelzebub")
      expect(myLinkedList.find("Beelzebub")).to.eql({data: "Beelzebub", next:
        {data: "Choronzon", next: null}})
    })
    it('returns -1 if the searchTerm does not exist in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Choronzon")
      expect(myLinkedList.insertAfter("Beelzebub", "Demogorgon")).to.eql(-1)
    })
  })

  context('insertBefore()', () => {
    it('Inserts new node at begining of list, which links to original' +
      'head node', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Choronzon")
      myLinkedList.insertBefore("Choronzon", "Beelzebub")
      expect(myLinkedList.find("Beelzebub")).to.eql({data: "Beelzebub", next:
        {data: "Choronzon", next: null}})
    })
    it('returns -1 if the searchTerm does not exist in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Choronzon")
      expect(myLinkedList.insertBefore("Beelzebub", "Demogorgon")).to.eql(-1)
    })
    it("Changes the next value of the node previous to node with the" +
      "searchTerm to be the value of the new node", () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Choronzon")
      myLinkedList.insertBefore("Choronzon", "Beelzebub")
      expect(myLinkedList.getHeadNode()).to.deep.equal({data: "Azazel", next:
        {data: "Beelzebub", next: {data: "Choronzon", next: null}}})
    })
  })

  context('removeFirst()', () => {
    it('Removes the head of the list, making the second item the new head', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      myLinkedList.insert("Choronzon")
      expect(myLinkedList.size()).to.deep.equal(3)
      myLinkedList.removeFirst()
      expect(myLinkedList.size()).to.deep.equal(2)
      expect(myLinkedList.getHeadNode()).to.deep.equal({data: "Beelzebub",
        next: {data: "Choronzon", next: null}})
    })
  })

  context('remove()', () => {
    it('removes the tail node of the list, making the next value of the second'+
      'to last node equal null', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Azazel")
      myLinkedList.insert("Beelzebub")
      myLinkedList.insert("Choronzon")
      expect(myLinkedList.size()).to.deep.equal(3)
      myLinkedList.remove()
      expect(myLinkedList.size()).to.deep.equal(2)
      expect(myLinkedList.getTailNode()).to.deep.equal({data: "Beelzebub", next: null})
    })
  })

})
