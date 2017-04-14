import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe.only('LinkedList', () => {

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    const myLinkedList = new LinkedList
    it('Returns the first node in the list', () => {
      expect(myLinkedList.head).to.equal(null)
    })
  })

  context('getTailNode()', () => {
    const myLinkedList = new LinkedList
    it('Returns the last node in the list', () => {
      expect(myLinkedList.tail).to.equal(null)
    })
  })

  context('find()', () => {
    const myLinkedList = new LinkedList
    myLinkedList.insert('curry')
    myLinkedList.insert('jerk')
    myLinkedList.insert('pepper')
    myLinkedList.insert('salt')
    it('Determines whether or not the list contains the provided data', () => {
      expect(myLinkedList.find('jerk')).to.be.true
    })
  })

  context('clear()', () => {
    const myLinkedList = new LinkedList
    myLinkedList.insert('curry')
    myLinkedList.insert('jerk')
    myLinkedList.insert('pepper')
    myLinkedList.insert('salt')
    myLinkedList.clear()
    it('Clears the list of all nodes', () => {
      expect(myLinkedList.count).to.equal(0)
    })
  })

  context('insert()', () => {
    const myLinkedList = new LinkedList
    myLinkedList.insert('curry')
    myLinkedList.insert('jerk')
    myLinkedList.insert('pepper')
    myLinkedList.insert('salt')
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      expect(myLinkedList.tail).to.eql({ data: 'salt', next: null })
    })
  })

  context('insertFirst()', () => {
    const myLinkedList = new LinkedList
    myLinkedList.insert('curry')
    myLinkedList.insert('jerk')
    it('Inserts a node (with the provided data) to the head of the list', () => {
      expect(myLinkedList.head).to.eql({ data: 'curry', next: null})
    })
  })
})
