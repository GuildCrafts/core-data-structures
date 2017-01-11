import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const list = new LinkedList()

      const insertedList = list.insert('A')

      expect(insertedList).to.have.property('data', 'A')
    })
  })

  context('insertFirst()', () => {
    it('inserts a node (with the provided data) to the head of the list', () => {
      const list = new LinkedList()


      const insertedList = list.insert('A')
      const resultList = list.insertFirst('1')

      expect(resultList.next).to.have.property('data', 'A')
    })
  })

  context('contains()', () => {
    it('determines whether a list contains the data passed through the parameter', () => {
      const list = new LinkedList()
      list.insert('A')
      list.insert('B')
      list.insert('C')

      expect(list.contains('C')).to.equal(true)
    })
  })

  context('find()', () => {
    it('determines whether a list finds the data passed through the parameter and returns that node', () => {
      const list = new LinkedList()
      list.insert('A')
      list.insert('B')
      list.insert('C')

      expect(list.find('C')).to.have.property('data', 'C')
    })
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('H')
      list.insert('A')
      list.insert('K')
      list.insert('A')

      expect(list.getHeadNode()).to.have.property('data', 'S')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('H')
      list.insert('A')
      list.insert('K')
      list.insert('A')

      expect(list.getTailNode()).to.have.property('data', 'A')
    })
  })

  context('insertBefore()', () => {
    it('Inserts a node containing the second parameter before the first node containing data of the first parameter', () => {
      const list = new LinkedList()

      list.insert('H')
      list.insert('A')
      list.insert('K')
      list.insert('A')
      list.insertBefore('H', 'S')

      expect(list.getHeadNode()).to.have.property('data', 'S')
    })
  })

  context('insertAfter()', () => {
    it('Inserts a node containing the second parameter after the first node containing data of the first parameter', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('A')
      list.insert('K')
      list.insert('A')
      list.insertAfter('S', 'H')

      expect(list.getHeadNode().next).to.have.property('data', 'H')
    })
  })

  context('remove()', () => {
    it('Removes the tail node from the list', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('H')
      list.insert('A')
      const testLocation = list.insert('K')
      list.insert('A')
      list.remove()

      expect(list.getTailNode()).to.have.property('data', 'K')
      expect(testLocation.next).to.equal(null)
    })
  })

  context('removeFirst()', () => {
    it('Removes the head node from the list', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('H')
      list.insert('A')
      list.insert('K')
      list.insert('A')
      list.removeFirst()

      expect(list.getHeadNode()).to.have.property('data', 'H')
    })
  })

  context('isEmpty()', () => {
    it('determines if the list is empty or not', () => {
      const list = new LinkedList()

      expect(list.size()).to.equal(0)
    })
  })

  context('size()', () => {
    it('determines the length of the list', () => {
      const list = new LinkedList()

      list.insert('A')
      list.insert('B')
      list.insert('C')

      expect(list.size()).to.equal(3)
    })
  })

  context('clear()', () => {
    it('determines the length of the list', () => {
      const list = new LinkedList()

      list.insert('A')
      list.insert('B')
      list.insert('C')
      list.clear()

      expect(list.size()).to.equal(0)
      expect(list.getHeadNode()).to.equal(null)
    })
  })
})
